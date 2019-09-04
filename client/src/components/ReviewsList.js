import React from 'react';
const axios = require('axios');

class ReviewsList extends React.Component {

    componentDidMount() {
        console.log("Ratings mounted successfully!");
        console.log(this.props.store.mainItem.product_id);
        this.getReviews(this.props.store.mainItem.product_id);
    }

    getReviews(product_id) {
        axios.get(`http://18.217.220.129/reviews/${product_id}/list`)
            .then(data => {
                console.log(data.data);
                this.props.reviewsListAction(data.data);
            })
            .then(i => {
                console.log(this.props.store.reviewsList.reviewsList.results);
            })
    }

    render() {
        let reviews = this.props.store.reviewsList.reviewsList.results || [];
        return (
          <div className="Reviews">
            REVIEWSLIST HERE!
            
              {reviews.map((item) => {
                return (
                <ul key={item.review_id}>
                  <li>Rating: {item.rating}</li>
                  <li>Summary: {item.summary}</li>
                  <li>User: {item.reviewer_name}</li>
                  <li>Date: {item.date}</li>
                  <li>Body: {item.body}</li>
                </ul>
                )
              })}
            
          </div>
        );
      }
}

export default ReviewsList