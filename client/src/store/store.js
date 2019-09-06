import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers/rootReducer.js';

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('get state', store.getState());
});

export default store;
