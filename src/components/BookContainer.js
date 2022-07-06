import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './AddBook';
import Book from './Book';
import Category from './Category';
import NavBar from './NavBar';
import './Book.css';

const BookContainer = () => (
  <div className="div">
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Book />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </div>
      <Book />
      <Book />
      <AddBook />
    </Router>
  </div>
);
export default BookContainer;
