import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './Book.css';
import { removeBook } from '../redux/Books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { id } = book;
  const handleRemove = () => dispatch(removeBook(id));
  return (
    <>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <button
        type="button"
        className="updateBtn"
        id={id}
        onClick={handleRemove}
      >
        Remove
      </button>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    // category: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
