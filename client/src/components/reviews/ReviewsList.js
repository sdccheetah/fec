import React from 'react';
const axios = require('axios');
import FiveStars from './FiveStars';
import './reviews.css';


class ReviewsList extends React.Component {

    componentDidMount() {
        // console.log("Reviews List mounted successfully!");
        this.getReviews(this.props.store.mainItem.product_id);
    }

    getReviews(product_id) {
        axios.get(`http://18.217.220.129/reviews/${product_id}/list?count=100`)
            .then(data => {
                //console.log(data.data);
                this.props.reviewsListAction(data.data);
            })
    }

    handleMoreReviews(event) {
      event.preventDefault();
      let total = this.props.store.reviewsList.results.length;
      let limit = this.props.store.reviewsMeta.limit;
      limit = limit + 2;
      if (limit > total) {
        limit = total;
      }
      this.props.reviewsLimitAction(limit);
    }

    render() {
        let reviews = this.props.store.reviewsList.results || [];
        let limit = this.props.store.reviewsMeta.limit;
        return (
          <div className="ReviewsList">
            <br/>
            Number of Reviews: {reviews.length}
            <br/>
              {reviews.slice(0,limit).map((item) => {
                return (
                <div key={item.review_id}>
                  <ul>
                    <FiveStars rating={item.rating}/>
                    <li>Rating: {item.rating}</li>
                    <li>Summary: {item.summary}</li>
                    <li>User: {item.reviewer_name}</li>
                    <li>Date: {item.date}</li>
                    <li>Body: {item.body}</li>
                    <li>#Helped: {item.helpfulness}</li>
                  </ul>
                </div>
                )
              })}
            <button onClick={this.handleMoreReviews.bind(this)}>More Reviews</button>
          </div>
        );
      }
}

export default ReviewsList