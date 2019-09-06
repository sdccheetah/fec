import { combineReducers } from 'redux';
import mainItem from './mainItemReducer.js';
import reviewsList from './reviewsListReducer.js';
import reviewsMeta from './reviewsMetaReducer.js';
import reviewsDefaults from './reviewsDefaultsReducer.js';


const rootReducer = combineReducers ({
  mainItem: mainItem,
  reviewsList,
  reviewsMeta,
  reviewsDefaults
});

export default rootReducer;