import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import AddBook from './AddBook';

const Books = ({ books }) => (
  <div>
    <ul className="book-content">
      {books.map((book) => <Book key={book.id} book={book} />)}
    </ul>
    <AddBook />
  </div>
);

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Books;
