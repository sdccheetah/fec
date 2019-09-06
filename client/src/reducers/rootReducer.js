import { combineReducers } from 'redux';
import mainItem from './mainItemReducer.js';
import questions from './QAReducer.js';

const rootReducer = combineReducers({
  mainItem: mainItem,
  questions: questions
});

export default rootReducer;
