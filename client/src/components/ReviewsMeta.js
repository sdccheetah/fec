import React from 'react';
const axios = require('axios');

class ReviewsMetaData extends React.Component {

    componentDidMount() {
        console.log("Review Meta Data mounted successfully!");
        this.getMetaData(this.props.store.mainItem.product_id);
    }

    ratingData(ratings) {
        let total = 0;
        let count = 0;
        for (let i = 1; i < 6; i++) { //Go 1 through 5
            if (ratings[i] !== undefined) {
                count = count + ratings[i];
                total = total + i*ratings[i];
            }
        }
        let average = parseFloat(parseFloat(total/count).toFixed(1));
        return {
            average: average,
            total: total
        };
    }

    recommended(recs) {
        let total = recs[0] + recs[1];
        let yes = recs[1];
        return (parseFloat(yes/total)*100).toFixed(0);
    }

    getMetaData(product_id) {
        axios.get(`http://18.217.220.129/reviews/${product_id}/meta`)
            .then(data => { //Process Meta Data first
                let newObj = {};
                let metaData = data.data;
                console.log(metaData);
                let ratings = metaData.ratings;
                console.log(ratings);
                let ratingData = this.ratingData(ratings); //Get the average rating
                Object.assign(newObj,ratingData);
                this.props.reviewsMetaAction(newObj);
                let recs = this.recommended(metaData.recommended); //Get the percent recommended
                newObj.recs = recs;
                this.props.reviewsMetaAction(newObj);

            })

    }

    render() {
        let metaData = this.props.store.reviewsMeta;
        return (
          <div className="Reviews">
            REVIEWSMETADATA HERE! 
            <div> <br/> Average: {metaData.average}</div>
            <div> {metaData.recs}% of reviews recommended this product</div>
            <br/>
          </div>
        );
      }
}

export default ReviewsMetaData