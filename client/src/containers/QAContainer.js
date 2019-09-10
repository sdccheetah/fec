import { connect } from 'react-redux';
import { initializeQA } from '../actions/initializeQA.js';
import QA from '../components/qa/QA.js';

const mapStateToProps = store => ({
  store: store
});

const mapDispatchToProps = dispatch => ({
  getQA: questions => dispatch(initializeQA(questions))
  // setKeyword: keyword => dispatch(setSearch(keyword))
});

const QAContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QA);

export default QAContainer;
