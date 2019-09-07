import React from 'react';
import './reviews.css';
import FiveStars from './FiveStars';

class ReviewSubmission extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        console.log(document.getElementById("form").value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
            <label> Name:
                <input type="text" id="form" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )
    }
}

export default ReviewSubmission
