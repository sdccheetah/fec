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

    render() {
        let reviews = this.props.store.reviewsList.results || [];
        return (
          <div className="ReviewsList">
            <br/>
            Number of Reviews: {reviews.length}
            <br/>
              {reviews.map((item) => {
                return (
                <div>
                  <ul key={item.review_id}>
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
            
          </div>
        );
      }
}

export default ReviewsList