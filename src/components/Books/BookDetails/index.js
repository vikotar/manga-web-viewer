import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { Tabs, TabList, Tab, Spinner } from "@chakra-ui/react";
import './styles.scss'
BookDetails.propTypes = {

};

function BookDetails({book}) {
  const [loading, setLoading] = useState(false);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
    const renderChapterTabs = () => {
      return (
        <div className="chapter-tabs">
          <Tabs size="sm" marginTop="8px" justifyContent="center" border="none">
            <TabList>
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
                    index={index}
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
  return (
    <div className='chapter-container'>

      {renderChapterTabs()}
    </div>
  )
}

export default BookDetails;
