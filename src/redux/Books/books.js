const ADD_BOOK = './Books/ADD_BOOK';
const REMOVE_BOOK = './Books/REMOVE_BOOK';
const FETCH_BOOK = './Books/FETCH_BOOK';

const InitialState = [];

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5jCFFvv4jZnTKL22CDg8/books';

const BookReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return state.concat(action.book);
    }

    case REMOVE_BOOK: {
      const remove = state.filter((book) => book.id !== action.id);
      return remove;
    }

    case FETCH_BOOK: {
      return action.books;
    }

    default:
      return state;
  }
};

export default BookReducer;

export const removeBook = (id) => async (dispatch) => {
  const bookDelete = await fetch(`${url}/${id}`, { method: 'DELETE' });
  const response = await bookDelete.text();
  if (response) {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  }
};

export const addBook = (book) => async (dispatch) => {
  fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: book.id,
        title: book.title,
        author: book.author,
        category: book.category,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  dispatch({
    type: ADD_BOOK,
    book,
  });
};

export const getBooks = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const entries = Object.entries(data);
  const books = entries.map((element) => ({
    id: element[0],
    title: Object.assign(...element[1]).title,
    author: Object.assign(...element[1]).author,
    category: Object.assign(...element[1]).category,
  }));

  dispatch({
    type: FETCH_BOOK,
    books,
  });
};
