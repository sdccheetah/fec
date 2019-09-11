const setSearch = keyword => {
  return {
    type: 'SEARCH',
    payload: keyword
  };
};

export { setSearch };
