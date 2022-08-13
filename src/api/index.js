const BASE_URL = "http://18.177.140.79:8080/";


/**
 * Gets the books
 * @returns a list of books
 */
export const getBooks = async () => {
    console.log('getBooks');
    const response = await fetch(BASE_URL + "books/");
    const data = await response.json();
    return data;
}

/**
 * Gets the details of the book including chapters.
 * @param {*} id bookId of the book
 * @returns book details of a book
 */
export const getBookDetails = async (id) => {
    const response = await fetch(BASE_URL + `books/${id}`);
    const data = await response.json();
    return data;
}

/**
 * Gets the chapter details of a book.
 * @param {*} id id of the chapter
 * @returns chapter details
 */
export const getChapterDetails = async (id) => {
    const response = await fetch(BASE_URL + `chapters/${id}/`);
    const data = await response.json();
    return data;
}
