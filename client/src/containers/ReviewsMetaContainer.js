import { connect } from 'react-redux';
import ReviewsMeta from '../components/ReviewsMeta';
import { reviewsMetaAction } from '../actions/reviewsMetaAction.js';


const mapStateToProps = (store) => ({
  store: store
});

const mapDispatchToProps = (dispatch) => ({
  reviewsMetaAction: (reviewsMeta) => dispatch(reviewsMetaAction(reviewsMeta))
});

const ReviewsMetaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsMeta);

export default ReviewsMetaContainer;