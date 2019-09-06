const initializeMain = ({mainItem}) => ({
  type: "INIT_STORE",
  mainItem: mainItem
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