import { connect } from 'react-redux';
import { initializeList } from './../actions/initializeList.js';
import InitPage from '../components/InitPage.js';

const mapStateToProps = (store) => ({
  list: store
});

const mapDispatchToProps = (dispatch) => ({
  getInitList: (list) => dispatch(initializeList({list}))
});

const InitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InitPage);

export default InitContainer;