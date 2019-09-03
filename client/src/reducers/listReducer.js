const simpleReducer = (state = null, action) => {
  switch (action.type) {
    case 'INIT_STORE':
        console.log('action');
        console.log(action.list);
      let tempObj = {
        list: action.list
      }
      return Object.assign({}, state, tempObj)
    default:
      return state;
  }
}

export default simpleReducer;