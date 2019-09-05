import React from 'react';
import './reviews.css';

function FiveStars(props) {
    console.log("FIVE STARS HERE");
    console.log(props.rating);
    let rating = props.rating;
    let stars = [];
    while (stars.length < 5) {
        if (rating > 1) {
            stars.push(1);
        } else if (rating > 0) {
            stars.push(rating);
        } else {
            stars.push(0);
        }
        rating = rating - 1;
    }
    return (
        <div>
            {stars.map((item, i) => {
                return (
                    <div className="single-star-container" key={i}>
                        <div className="single-star-fill" style={{"width" : `${parseInt(item*20)}px`}}>
                            <img className="single-star-outline" src="singlestar.png"></img>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FiveStars;