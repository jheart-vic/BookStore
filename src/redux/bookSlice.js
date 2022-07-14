import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = './Books/ADD_BOOK';
const REMOVE_BOOK = './Books/REMOVE_BOOK';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UB9CsOfwDsMDrOQfBksC/books';

export const fetchBooks = createAsyncThunk('Books/fetchBooks', async () => {
  const response = await axios.get(url);
  return response.data;
});
export const postBooks = createAsyncThunk('Books/postBooks', async (book) => {
  const newBook = {
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: book.category,
  };
  const data = await axios.post(url, newBook);
  return data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: null,
  },
  reducer: {
    removeBook: (id) => ({
      type: REMOVE_BOOK,
      id,
    }),
    addBook: (book) => ({ type: ADD_BOOK, book }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });
  },
});

export default bookSlice.reducer;
