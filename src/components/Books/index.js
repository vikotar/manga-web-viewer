import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, Spinner } from "@chakra-ui/react";

import { getBooks } from '../../api/index';

//components
import BookDetails from '../../components/Books/BookDetails/index';

function Books() {
  const [loading, setLoading] = useState(false);
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);
  const [books, setBooks] = useState([]);

  const getBooksData = async () => {
    setLoading(true)
    const books = await getBooks();
    setBooks(books);
    setLoading(false)
  }

  useEffect(() => {
    getBooksData();
  }, []);

  const renderTabs = () => {
    return (
      <Tabs size="md" variant="enclosed">
        <TabList>
          {books.map((book, index) => {
            return (
              <Tab
                key={index}
                color="gray"
                _selected={{ color: "white", bg: "blue.500" }}
                onClick={() => setSelectedBookIndex(index)}
                index={index}
              >
                {book.title}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
    );
  }

  return (
    <div>
      {
        loading
        ? (
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        )
        : renderTabs()
      }
      { books.length ? <BookDetails book={books[selectedBookIndex]}/> : '' }
    </div>
  );
}

export default Books;
