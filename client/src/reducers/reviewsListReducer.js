const reviewsListReducer = (state = {reviewsList : []}, action) => {
    switch (action.type) {
      case 'REVIEWS_LIST':
        return {
            reviewsList: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reviewsListReducer;