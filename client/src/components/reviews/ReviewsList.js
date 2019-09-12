import React from 'react';
const axios = require('axios');
import FiveStars from './FiveStars';
import ReviewSubmission from './ReviewSubmission';
import ImageComponent from './ImageComponent';
import './reviews.css';


class ReviewsList extends React.Component {

    getReviews(product_id) {
        axios.get(`http://18.217.220.129/reviews/${product_id}/list?count=100`)
            .then(data => {
                let newData = data.data;
                newData.product_id = this.props.store.mainItem.product_id;
                this.props.reviewsListAction(newData);
                this.props.reviewsLimitAction(2);
                this.props.reviewsPostAction([]);
            })
    }

    handleMoreReviews(event) {
      event.preventDefault();
      let total = this.props.store.reviewsList.list.results.length;
      let limit = this.props.store.reviewsList.limit;
      limit = limit + 2;
      if (limit > total) {
        limit = total;
      }
      this.props.reviewsLimitAction(limit);
    }

    reset() {
      this.props.reviewsListAction({list: [], limit: 2, submit: [], product_id: null});
      this.props.reviewsMetaAction({average: 0.0, recs: 0, total: 0, stars: [], characteristics: [], product_id: null});
    }

    render() {
        let reviews = this.props.store.reviewsList.list.results || [];
        let limit = this.props.store.reviewsList.limit;
        let submission = this.props.store.reviewsList.submit;
        let months = this.props.store.reviewsDefaults.months;
        let details = this.props.store.mainItem.details;
        if (parseInt(this.props.store.reviewsList.list.product_id) !== parseInt(this.props.store.mainItem.product_id)) {
          this.getReviews(this.props.store.mainItem.product_id);
      } 
        if (reviews.length === 0) {
          return (
          <div className="ReviewsList">
            {details !== undefined && (<ReviewSubmission product_id={this.props.store.mainItem.product_id} characteristics={this.props.store.reviewsMeta.characteristics} charsTable={this.props.store.reviewsDefaults.charsTable} name={details.name}/>)}
          </div>
          )
        }
        return (
          <div className="ReviewsList">
            <br/>
            <ul><div className="Reviews-List-Total">{reviews.length} reviews, sorted by relevance</div></ul>
              {reviews.slice(0,limit).map((item) => {
                return (
                <div key={item.review_id}>
                  <ul>
                    <div className="review-entry-top">
                      <FiveStars rating={item.rating}/>
                      <div className="review-entry-name-date">{item.reviewer_name + ", " + months[item.date.substring(5,7)-1]  + " " + parseInt(item.date.substring(8,10)) + ", " + item.date.substring(0,4)}</div>
                    </div> <br/>
                    <div className="review-list-summary">{item.summary}</div> <br/>
                    <div>{item.body}</div> <br/>
                    {parseInt(item.recommend) === 1 && (
                      <div><div className="review-list-rec">✔ I recommend this product</div><br/></div>
                    )}
                    {item.response != null && item.response.length > 0 && !(item.response.includes("null")) && (
                      <div className="review-list-res">Response:<br/>{item.response}</div>
                    )}
                    <div>Helpful? Yes({item.helpfulness})   |    Report</div>
                    <div className="review-photos">
                    {item.photos.map((item) => {
                      return <ImageComponent source={item.url} id={item.id} key={item.id}/>
                    })} 
                    </div>
                  </ul>
                </div>
                )
              })}
            <ul>
            <div className="review-buttons"><button onClick={this.handleMoreReviews.bind(this)}>More Reviews</button>
            {details !== undefined && (<ReviewSubmission product_id={this.props.store.mainItem.product_id} characteristics={this.props.store.reviewsMeta.characteristics} charsTable={this.props.store.reviewsDefaults.charsTable} name={details.name} getReviews={this.reset.bind(this)}/>)}
            </div></ul>
          </div>
        );
      }
}

export default ReviewsList