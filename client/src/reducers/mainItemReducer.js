const mainItemReducer = (state = {product_id: Math.floor(Math.random() * Math.floor(10000)) + 1}, action) => {
  let tempObj = {};
  switch (action.type) {
    case 'INIT_STORE':
      tempObj = {
        details: action.mainItem,
        init: true
      }
      return Object.assign({}, state, tempObj);
    case 'SET_STYLES':
      tempObj = {
        styles: action.styles,
        currentStyle: action.styles[0]
      }
      return Object.assign({}, state, tempObj);
    case 'SET_CURRENT':
      tempObj = {
        currentStyle: action.currentStyle.style
      }
      return Object.assign({}, state, tempObj);
    default:
      return state;
  }
}

export default mainItemReducer;