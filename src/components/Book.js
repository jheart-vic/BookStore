import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Book.css';
import { removeBook } from '../redux/Books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { id } = book;
  const percentage = 66;

  return (

    <div className="bookContents">
      <div className="content1">
        <div className="content1FirstChild">
          <p className="genre">{book.category}</p>
          <h2 className="title">{book.title}</h2>
          <p className="author">{book.author}</p>
        </div>
        <div className="content1SecondChild">
          <button type="button" className="commentBtn">Comment</button>
          <button type="button" className="removeBtn" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button" className="editBtn">Edit</button>
        </div>
      </div>
      <div className="content2">
        <div className="circular-progressbar">
          <CircularProgressbar
            className="progresBar"
            value={percentage}
          />
        </div>
        <div className="progressDetails">
          <span className="percentage">
            {`${percentage}%`}
          </span>
          <h2 className="completed">Completed</h2>
        </div>

      </div>
      <div className="line" />

      <div className="content3">
        <span className="currentChapter">CURRENT CHAPTER</span>
        <span className="chapter">Chapter 1: Introduction</span>
        <button type="button" className="updateBtn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
