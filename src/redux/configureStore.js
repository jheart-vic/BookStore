import { combineReducers, configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import BookReducer from './Books/books';
import CategoryReducer from './Categories/categories';

const rootReducer = combineReducers({
  BookReducer,
  CategoryReducer,
});

const store = configureStore(rootReducer, applyMiddleware(thunk));
export default store;
