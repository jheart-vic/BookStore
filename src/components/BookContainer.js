import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import Category from './Category';
import NavBar from './NavBar';
import './Book.css';
import { getBooks } from '../redux/Books/books';

const BookContainer = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.BookReducer);
  useEffect(
    () => {
      dispatch(getBooks());
    },
    [dispatch],
  );
  return (
    <Router>

      <div className="div">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Books books={books} />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
};

export default BookContainer;
