import { connect } from 'react-redux';
import ReviewsList from '../components/reviews/ReviewsList';
import { reviewsListAction, reviewsLimitAction } from '../actions/reviewsListAction.js';
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