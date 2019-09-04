const mainItemReducer = (state = {product_id: Math.floor(Math.random() * Math.floor(10000)) + 1}, action) => {
  switch (action.type) {
    case 'INIT_STORE':
      let tempObj = {
        mainItem: action.mainItem,
        init: true
      }
      return Object.assign({}, state, tempObj)
    default:
      return state;
  }
}

export default mainItemReducer;