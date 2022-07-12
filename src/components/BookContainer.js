import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import Books from './Books';
import Category from './Category';
import NavBar from './NavBar';
import './Book.css';

const BookContainer = () => {
  const books = useSelector((state) => state.BookReducer);
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
