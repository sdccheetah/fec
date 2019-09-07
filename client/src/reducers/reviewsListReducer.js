const reviewsListReducer = (state = {list: [], limit: 2}, action) => {
    switch (action.type) {
      case 'REVIEWS_LIST':
        return Object.assign({}, state, {list: action.payload});
      case 'REVIEWS_LIMIT':
          return Object.assign({}, state, {limit: action.payload});
      default:
        return state;
    }
  }
  
export default reviewsListReducer;