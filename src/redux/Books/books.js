const ADD_BOOK = './Books/ADD_BOOK';
const REMOVE_BOOK = './Books/REMOVE_BOOK';

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

const BookReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const newState = [{
        id: `book${Date.now()}`,
        title: action.book.title,
        author: action.book.author,
        // category: action.book.category,
      }];
      return state.concat(newState);
    }

    case REMOVE_BOOK: {
      const remove = state.filter((book) => book.id !== action.id);
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
