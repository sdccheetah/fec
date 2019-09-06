import { connect } from 'react-redux';
import { initializeQA } from '../actions/initializeQA.js';
import QA from '../components/QA.js';

const mapStateToProps = store => ({
  store: store
});

const mapDispatchToProps = dispatch => ({
  getQA: questions => dispatch(initializeQA(questions))
});

const QAContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QA);

export default QAContainer;
