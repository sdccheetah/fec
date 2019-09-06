import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers/rootReducer.js';

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('get state', store.getState());
  //console.log(store.getState());
});

export default store;
