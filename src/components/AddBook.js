import React from 'react';
import './AddBook.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/Books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  let title = '';
  let author = '';
  let category = '';

  const clearInput = () => {
    setTimeout(() => {
      title = '';
      author = '';
      category = '';
    });
  };

  const submitBook = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: String(uuidv4()), title, author, category,
    }));
    clearInput();
  };

  const handleChange = (e) => {
    const inputValue = e.target.name;
    if (inputValue === 'title') {
      title = e.target.value;
    }
    if (inputValue === 'author') {
      author = e.target.value;
    }
    if (inputValue === 'category') {
      category = e.target.value;
    }
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
        <input
          type="text"
          name="category"
          className="inputCategory"
          onChange={handleChange}
          placeholder="Book category"
          id="input2"
          required
        />
        <button
          type="submit"
          className="FormBtn"
          onClick={submitBook}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
