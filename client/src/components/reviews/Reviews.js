import React from 'react';
import ReviewsListContainer from '../../containers/ReviewsListContainer.js';
import ReviewsMetaContainer from '../../containers/ReviewsMetaContainer.js';
import './reviews.css';

function Reviews(props) {
    return (
        <div>
            <br/>
            <div className="Reviews-Layout">
                    <ReviewsMetaContainer/>
                    <ReviewsListContainer/>
            </div>
        </div>
    )
};

export default Reviews;