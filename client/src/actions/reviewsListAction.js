const reviewsListAction = (reviews) => ({
    type: "REVIEWS_LIST",
    payload: reviews
  });

  const reviewsLimitAction = (limit) => ({
    type: "REVIEWS_LIMIT",
    payload: limit
  });

  const reviewsSortAction = (sort) => ({
    type: "REVIEWS_SORT",
    payload: sort
  });
  
  
  export { reviewsListAction, reviewsLimitAction, reviewsSortAction };