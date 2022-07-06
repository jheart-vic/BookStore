import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
// import './Book.css';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const Books = () => {
//   const percentage = 66;
//   return (
//     <div className="bookContents">
//       <div className="content1">
//         <div className="content1FirstChild">
//           <p className="genre">Action</p>
//           <h2 className="title">The Hunger Games</h2>
//           <p className="author">Suzanne Collins</p>
//         </div>
//         <div className="content1SecondChild">
//           <button type="button" className="commentBtn">Comment</button>
//           <button type="button" className="removeBtn">Remove</button>
//           <button type="button" className="editBtn">Edit</button>
//         </div>
//       </div>
//       <div className="content2">
//         <div className="circular-progressbar">
//           <CircularProgressbar
//             className="progresBar"
//             value={percentage}
//           />
//         </div>
//         <div className="progressDetails">
//           <span className="percentage">
//             {`${percentage}%`}
//           </span>
//           <h2 className="completed">Completed</h2>
//         </div>

//       </div>

//       <div className="content3">
//         <span className="currentChapter">CURRENT CHAPTER</span>
//         <span className="chapter">Chapter 17</span>
//         <button type="button" className="updateBtn">UPDATE PROGRESS</button>
//       </div>

//     </div>
//   );
// };

const Books = ({ books }) => (
  <ul className="book-content">
    {books.map((book) => <Book key={book.id} book={book} />)}
  </ul>
);

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Books;
