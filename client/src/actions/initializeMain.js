const initializeMain = ({mainItem}) => ({
  type: "INIT_STORE",
  mainItem: mainItem
});

const getStyles = ({styles}) => ({
  type: "SET_STYLES",
  styles: styles
});

export { initializeMain, getStyles };