import { connect } from 'react-redux';
import ReviewsList from '../components/reviews/ReviewsList';
import { reviewsListAction } from '../actions/reviewsListAction.js';
import { reviewsLimitAction } from '../actions/reviewsLimitAction.js';



const mapStateToProps = (store) => ({
  store: store
});

const mapDispatchToProps = (dispatch) => ({
  reviewsListAction: (reviewsList) => dispatch(reviewsListAction(reviewsList)),
  reviewsLimitAction: (limit) => dispatch(reviewsLimitAction(limit))

});

const ReviewsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsList);

export default ReviewsListContainer;