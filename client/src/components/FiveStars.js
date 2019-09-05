import React from 'react';
import './reviews.css';

function FiveStars(props) {
    return (
        <div>
            <div className="five-stars-fill">
                <img className="five-stars-outline" src="fivestars.png"></img>
            </div>
        </div>
    );
};

export default FiveStars;