import { connect } from 'react-redux';
import ReviewsList from '../components/reviews/ReviewsList';
import { reviewsListAction } from '../actions/reviewsListAction.js';
import { reviewsLimitAction } from '../actions/reviewsLimitAction.js';
import { reviewsPostAction } from '../actions/reviewsPostAction.js';




const mapStateToProps = (store) => ({
  store: store
});

const mapDispatchToProps = (dispatch) => ({
  reviewsListAction: (reviewsList) => dispatch(reviewsListAction(reviewsList)),
  reviewsLimitAction: (limit) => dispatch(reviewsLimitAction(limit)),
  reviewsPostAction: (arr) => dispatch(reviewsPostAction(arr))


});

const ReviewsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsList);

export default ReviewsListContainer;