import axios from 'axios';

const ADD_BOOK = './Books/ADD_BOOK';
const REMOVE_BOOK = './Books/REMOVE_BOOK';
const FETCH_BOOK = './Books/FETCH_BOOK';

const InitialState = [{
  id: '2',
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
  category: 'Action',
},
{
  id: '3',
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
  category: 'Action',
},
];
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/q5Rf5ziWBignU2VPn4ba/books';

const BookReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const bookObjects = {
        item_id: 'item 1',
        title: action.book.title,
        author: action.book.author,
        category: action.book.category,
      };
      const newState = [{
        id: `book${Date.now()}`,
        title: action.book.title,
        author: action.book.author,
        category: action.book.category,
      }];
      axios.post(url, bookObjects);
      return state.concat(newState);
    }

    case REMOVE_BOOK: {
      const remove = state.filter((book) => book.id !== action.id);
      return remove;
    }

    case FETCH_BOOK: {
      return action.newBook;
    }

    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD_BOOK, book });

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const fetchBook = () => (dispatch) => {
  axios.get(url).then((response) => {
    const data = Object.entries(response.data);
    dispatch({
      type: FETCH_BOOK, newBook: data,
    });
  });
};

export default BookReducer;
