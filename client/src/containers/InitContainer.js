import { connect } from 'react-redux';
import { initializeMain } from './../actions/initializeMain.js';
import InitPage from '../components/InitPage.js';

const mapStateToProps = (store) => ({
  store: store
});

const mapDispatchToProps = (dispatch) => ({
  getInitMain: (mainItem) => dispatch(initializeMain({mainItem}))
});

const InitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InitPage);

export default InitContainer;