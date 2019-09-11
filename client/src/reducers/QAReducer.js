const QAReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'QA':
      let tempObj = {
        questions: payload
      };
      //console.log('temporary object', tempObj);
      return Object.assign({}, state, tempObj);
    case 'POST_ANSWER':
      return payload;
    case 'VOTE_ANSWER':
      return payload;
    case 'REPORT_ANSWER':
      return payload;
    case 'VOTE_QUESTION':
      return payload;
    case 'REPORT_QUESTION':
      return payload;
    default:
      return state;
  }
};

export default QAReducer;
