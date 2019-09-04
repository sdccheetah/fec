const reviewsListReducer = (state = {average: 0.0, recs: 0}, action) => {
    switch (action.type) {
      case 'REVIEWS_META':
        let newData = {
          average: action.payload.average,
          recs: action.payload.recs
        }
        return Object.assign({}, state, newData);
      default:
        return state;
    }
  }
  
export default reviewsListReducer;