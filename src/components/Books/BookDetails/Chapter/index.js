import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {  Spinner } from "@chakra-ui/react"

import { getChapterDetails } from '../../../../api'

const Chapter = (props) => {
  const { id, goPreviousChapter, goNextChapter } = props
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);

  const getChapterData = async (chapterId) => {
    setLoading(true);
    const chapter = await getChapterDetails(chapterId);
    setChapter(chapter);
    setSelectedPage(0);
    setLoading(false);
  };

  useEffect(() => {
    getChapterData(id);
  }, [id]);

  const onImageClick = function(event) {
    const imgElement = event.target
    let x = event.pageX - imgElement.offsetLeft;
    const isClickOnLeft = x < imgElement.width / 2 ? true: false;
    if(isClickOnLeft) {
      if(selectedPage + 1 === chapter.pages.length) {
        goNextChapter()
      } else {
        setSelectedPage(selectedPage + 1);
      }
    } else {
      if (selectedPage === 0) {
        goPreviousChapter()
      } else {
        setSelectedPage(selectedPage - 1);
      }
    }
  }

  const renderImages = () => {
    if(!chapter || !chapter.pages) return null;
    const currentPage = chapter.pages[selectedPage];
    if (!currentPage) return null;
    return (
      <div>
        <img
          src={currentPage.image.file}
          alt={currentPage.id}
          style={{ width: "100%", height: 600, marginTop: 16 }}
          onClick = {onImageClick}
        />
        <div>{selectedPage + 1}/{chapter.pages.length}</div>
      </div>
    );
  }

  return (
    <div>
      {loading ? <Spinner marginTop='32px'/> : renderImages()}
    </div>
    )
};

Chapter.propTypes = {
  id: PropTypes.number,
  goPreviousChapter: PropTypes.func,
  goNextChapter: PropTypes.func,
};

export default Chapter;
