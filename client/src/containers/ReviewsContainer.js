import { connect } from 'react-redux';
import ReviewsList from '../components/ReviewsList';
import { reviewsAction } from '../actions/reviewsAction.js';


const mapStateToProps = (store) => ({
  store: store
});

const mapDispatchToProps = (dispatch) => ({
  reviewsAction: (reviewsList) => dispatch(reviewsAction(reviewsList))
});

const ReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsList);

export default ReviewsContainer;