import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import { Tabs, TabList, Tab } from "@chakra-ui/react";
import './styles.scss'

import Chapter from './Chapter';

BookDetails.propTypes = {
  book: PropTypes.object.isRequired,
};

function BookDetails({ book }) {
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);

  useEffect(() => {
    setSelectedChapterIndex(0)
  }, [book])

  const renderChapterTabs = () => {
    return (
      <div className="chapter-tabs">
        <Tabs size="sm" marginTop="8px" justifyContent="center" border="none" index={selectedChapterIndex}>
          <TabList border={'none'}>
            {book.chapter_ids.map((id, index) => {
              return (
                <Tab
                  key={index}
                  color="gray"
                  border="1px solid black"
                  borderRadius="4px"
                  marginRight="2px"
                  _selected={{ color: "white", bg: "green.500" }}
                  onClick={() => setSelectedChapterIndex(index)}
                >
                  {id}
                </Tab>
              );
            })}
          </TabList>
        </Tabs>
      </div>
    );
  };

  const goPreviousChapter = () => {
    if (selectedChapterIndex === 0) {
      alert('Please choose a book from top tabs.');
    } else {
      setSelectedChapterIndex(selectedChapterIndex - 1);
    }
  }
  const goNextChapter = () => {
    if (selectedChapterIndex + 1 === book.chapter_ids.length) {
      alert('Cool! you finished the book. Now a choose a new one to read.');
    } else {
      setSelectedChapterIndex(selectedChapterIndex + 1);
    }
  }

  return (
    <div className="chapter-container">
      {renderChapterTabs()}
      <Chapter
        id={book.chapter_ids[selectedChapterIndex]}
        goPreviousChapter={goPreviousChapter}
        goNextChapter={goNextChapter}
        />
    </div>
  );
}

export default BookDetails;
