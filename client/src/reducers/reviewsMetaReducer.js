const reviewsMetaReducer = (state = {average: 0.0, recs: 0, total: 0, stars: [], characteristics: [], limit: 2}, action) => {
    switch (action.type) {
      case 'REVIEWS_META':
        return Object.assign({}, state, action.payload);
      case 'REVIEWS_LIMIT':
        return Object.assign({}, state, {limit: action.payload});
      default:
        return state;
    }
  }
  
export default reviewsMetaReducer;