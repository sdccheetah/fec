import { connect } from 'react-redux';
import ReviewsList from '../components/ReviewsList';
import { reviewsListAction } from '../actions/reviewsListAction.js';


const mapStateToProps = (store) => ({
  store: store
});

const mapDispatchToProps = (dispatch) => ({
  reviewsListAction: (reviewsList) => dispatch(reviewsListAction(reviewsList))
});

const ReviewsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsList);

export default ReviewsListContainer;