import { connect } from 'react-redux';
import { initializeMain, getStyles, setCurrent } from './../actions/initializeMain.js';
import InitPage from '../components/InitPage.js';

const mapStateToProps = (store) => ({
  store: store
});

const mapDispatchToProps = (dispatch) => ({
  getInitMain: (mainItem, prodId) => dispatch(initializeMain({mainItem, prodId})),
  getStyles: (styles) => dispatch(getStyles({styles})),
  setCurrent: (style) => dispatch(setCurrent({style}))
});

const InitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InitPage);

export default InitContainer;