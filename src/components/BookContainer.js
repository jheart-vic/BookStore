import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './AddBook';
import Book from './Book';
import NavBar from './NavBar';
import './Book.css';

const BookContainer = () => (
  <div className="div">
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Book />} />
        </Routes>
      </div>
    </Router>
    <Book />
    <Book />
    <AddBook />
  </div>
);
export default BookContainer;
