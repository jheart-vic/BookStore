import React from 'react';
import './Book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = () => {
  const percentage = 66;
  return (
    <div className="bookContents">
      <div className="content1">
        <div className="content1FirstChild">
          <p className="genre">Action</p>
          <h2 className="title">The Hunger Games</h2>
          <p className="author">Suzanne Collins</p>
        </div>
        <div className="content1SecondChild">
          <button type="button" className="commentBtn">Comment</button>
          <button type="button" className="removeBtn">Remove</button>
          <button type="button" className="editBtn">Edit</button>
        </div>
      </div>
      <div className="content2">
        <div className="circular-progressbar">
          <CircularProgressbar
            className="progresBar"
            value={percentage}
            // text={`${percentage}%`}
          />
        </div>
        <div className="progressDetails">
          <span className="percentage">
            {`${percentage}%`}
          </span>
          <h2 className="completed">Completed</h2>
        </div>

      </div>

      <div className="content3">
        <span className="currentChapter">CURRENT CHAPTER</span>
        <span className="chapter">Chapter 17</span>
        <button type="button" className="updateBtn">UPDATE PROGRESS</button>
      </div>

    </div>
  );
};

export default Book;
