import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect, useSelector } from 'react-redux/es/exports';
import Books from './Books';
import { fetchBook } from '../redux/Books/books';
import Category from './Category';
import NavBar from './NavBar';
import './Book.css';

const BookContainer = () => {
  const books = useSelector((state) => state.BookReducer);
  useEffect(() => {
    fetchBook();
  }, []);
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

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBook()),
});

export default connect(mapDispatchToProps)(BookContainer);
