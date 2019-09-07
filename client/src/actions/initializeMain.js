const initializeMain = ({mainItem, prodId}) => ({
  type: "INIT_STORE",
  mainItem: mainItem,
  prodId: prodId
});

const getStyles = ({styles}) => ({
  type: "SET_STYLES",
  styles: styles
});

const setCurrent = ({style}) => ({
  type: "SET_CURRENT",
  currentStyle: style
});

export { initializeMain, getStyles, setCurrent };