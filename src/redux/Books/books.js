const ADD_BOOK = './books/ADD_BOOK';
const REMOVE_BOOK = './books/REMOVE_BOOK';

const InitialState = [];

const BookReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const newState = [`book${Date.now()}`, [{
        title: action.book.book,
        author: action.book.author,
        category: action.book.category,
      }]];
      return [...state, newState];
    }

    case REMOVE_BOOK: {
      const remove = state.filter((book) => book[0] !== action.id);
      return remove;
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

export default BookReducer;
