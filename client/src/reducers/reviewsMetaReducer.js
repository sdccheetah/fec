const reviewsListReducer = (state = {average: 0.0, recs: 0, total: 0, stars: []}, action) => {
    switch (action.type) {
      case 'REVIEWS_META':
        return Object.assign({}, state, action.payload);
      default:
        return state;
    }
  }
  
export default reviewsListReducer;