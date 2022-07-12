import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import './Book.css';
import { categories } from '../redux/Categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <>
        <h1>checking...</h1>
        <button type="button" className="updateBtn" onClick={() => dispatch(categories())}>Check status</button>
      </>
    </div>

  );
};

export default Category;
