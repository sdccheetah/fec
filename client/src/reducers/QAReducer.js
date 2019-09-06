const QAReducer = (state = [], action) => {
  switch (action.type) {
    case 'QA':
      let tempObj = {
        questions: action.questions
      };
      return Object.assign({}, state, tempObj);
    default:
      return state;
  }
};

export default QAReducer;
