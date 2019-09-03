const simpleReducer = (state = null, action) => {
  switch (action.type) {
    case 'INIT_STORE':
      let tempObj = {
        list: action.list
      }
      return Object.assign({}, state, tempObj)
    default:
      return state;
  }
}

export default simpleReducer;