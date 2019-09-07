const reviewsListAction = (reviews) => ({
    type: "REVIEWS_LIST",
    payload: reviews
  });

  const reviewsLimitAction = (limit) => ({
    type: "REVIEWS_LIMIT",
    payload: limit
  });
  
  
  export { reviewsListAction, reviewsLimitAction };