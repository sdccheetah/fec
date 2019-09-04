import React from 'react';
const axios = require('axios');
import './reviews.css';

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
            } else {
                ratings[i] = 0;
            }
        }
        let average = parseFloat(parseFloat(total/count).toFixed(1));
        let stars = [];
        stars.push((parseFloat(ratings[5]/count)*100).toFixed(0));
        stars.push((parseFloat(ratings[4]/count)*100).toFixed(0));
        stars.push((parseFloat(ratings[3]/count)*100).toFixed(0));
        stars.push((parseFloat(ratings[2]/count)*100).toFixed(0));
        stars.push((parseFloat(ratings[1]/count)*100).toFixed(0));
        return {
            average: average,
            count: count,
            stars: stars
        };
    }

    recommended(recs) {
        let yes = recs[1] || 0;
        let no = recs[0] || 0;
        let total = yes + no;
        return (parseFloat(yes/total)*100).toFixed(0);
    }

    getMetaData(product_id) {
        axios.get(`http://18.217.220.129/reviews/${product_id}/meta`)
            .then(data => { //Process Meta Data first
                let newObj = {};
                let metaData = data.data;
                console.log(metaData);
                let ratings = metaData.ratings;
                let ratingData = this.ratingData(ratings); //Get the average rating and counts for #stars
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
          <div className="ReviewsMeta">
            REVIEWSMETADATA HERE! 
            <div> {metaData.count} Total Ratings</div> <br/>
            {metaData.stars.map((item, i) => {
                return (
                    <div className="starPercentage" key={5-i}> 
                    <div className="percentage-text">{5-i} Stars </div> 
                    <div className="percentage-bar">
                        <div className="percentage-fill" style={{"width" : `${item}%`}} ></div> 
                    </div> <div className="percentage-num"> {item}% </div>
                    </div>
                )
            } )}
            <div> <br/> Average: {metaData.average}</div>
            <div> {metaData.recs}% of reviews recommended this product</div>
            <br/>
          </div>
        );
      }
}

export default ReviewsMetaData