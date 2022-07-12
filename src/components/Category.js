import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import './Book.css';
import { categories } from '../redux/Categories/categories';

const Category = () => {
  const category = useSelector((state) => state.CategoryReducer);
  const dispatch = useDispatch();
  const handleSubmit = () => dispatch(categories());
  return (
    <div>
      <>
        <h1>{category}</h1>
        <button type="button" className="updateBtn" onClick={handleSubmit}>Check status</button>
      </>
    </div>

  );
};

export default Category;
