import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import BookReducer from './Books/books';
import CategoryReducer from './Categories/categories';

const rootReducer = combineReducers({
  BookReducer,
  CategoryReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
