const reviewsListReducer = (state = [], action) => {
    switch (action.type) {
      case 'REVIEWS_LIST':
        return Object.assign({}, state, action.payload);
      default:
        return state;
    }
  }
  
export default reviewsListReducer;