import React, { useState } from 'react';
import './AddBook.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/Books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '', id: `${Date.now()}` });
  const handleChange = (e) => {
    const inputs = e.target.name;
    if (inputs === 'title') {
      setBook({ title: e.target.value, author: book.author });
    }
    if (inputs === 'author') {
      setBook({ title: book.title, author: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
  };

  return (
    <div className="inputContainer">
      <h2 className="FormText">ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          name="title"
          className="inputTitle"
          onChange={handleChange}
          placeholder="Book Title"
          id="input0"
          required
        />
        <input
          type="text"
          name="author"
          className="inputAuthor"
          onChange={handleChange}
          placeholder="Book Author"
          id="input1"
          required
        />
        <button
          type="submit"
          className="FormBtn"
          onClick={handleSubmit}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
