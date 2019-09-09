import React from 'react';
import './reviews.css';

class ReviewSubmission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starsArr: [0,0,0,0,0],
            oldArr: [0,0,0,0,0],
            rec: "yes",
            charsArr: [],
            characteristics: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStarsHover = this.handleStarsHover.bind(this);
        this.handleStarsClick = this.handleStarsClick.bind(this);
        this.handleStarsLeave = this.handleStarsLeave.bind(this);
        this.handleRadioClick = this.handleRadioClick.bind(this);
        this.handleRadioRecClick = this.handleRadioRecClick.bind(this);

    }

    componentDidMount(event) {
        this.getCharacteristics();
    }

    getCharacteristics() {
        let characteristics = this.props.characteristics;
        let charsTable = this.props.charsTable;
        let newArr = [];
        let charVals = {};
        for (let i = 0; i < characteristics.length; i++) {
            let levelArr = [];
            for (let k = 1; k < 6; k++) {
                levelArr.push(charsTable[characteristics[i].name][k]);
            }
            let charObj = Object.assign({}, {name: characteristics[i].name, id: characteristics[i].id, levels: levelArr});
            charVals[characteristics[i].id] = null;
            newArr.push(charObj);
        }
        this.setState({
            charsArr: newArr,
            characteristics: charVals
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(document.getElementById("review-name-submission").value);
        console.log(document.getElementById("review-email-submission").value);

    }

    handleStarsHover(event) {
        event.preventDefault();
        let rating = parseInt(event.target.getAttribute("value"))+1;
        let newArr = [];
        while (newArr.length < 5) {
            if (rating > 0) {
                rating--;
                newArr.push(1);
            } else {
                newArr.push(0);
            }
        }
        this.setState({
            starsArr: newArr
        });
    }

    handleStarsClick(event) {
        event.preventDefault();
        this.setState({
            oldArr: this.state.starsArr
        });
    }

    handleStarsLeave(event) {
        event.preventDefault();
        this.setState({
            starsArr: this.state.oldArr
        });
    }

    handleRadioRecClick(event) {
        this.setState({
            rec: event.target.value
        });
    }

    handleRadioClick(event) {
        let chars = this.state.characteristics;
        let newChars = Object.assign({}, chars);
        let id = event.target.getAttribute("id");
        newChars[id] = parseInt(event.target.value);
        this.setState({
            characteristics: newChars
        });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="ReviewSubmission">Write Your Review about <br/>{this.props.name}</div>
            <div>
                Overall Rating*<br/>
                {this.state.starsArr.map((item, i) => {
                    return (
                        <div className="single-star-container" value={i} key={i} onMouseOver={this.handleStarsHover} onClick={this.handleStarsClick} onMouseLeave={this.handleStarsLeave}>
                            <div className="single-star-fill" style={{"width" : `${parseInt(item*20)}px`}}>
                                <img className="single-star-outline" src="singlestar.png" value={i} ></img>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="review-radio-rec">
                Do you recommend this product?* <br/>
                <label>
                    <input type="radio" value="yes" onChange={this.handleRadioRecClick} checked={this.state.rec === 'yes'} />
                    Yes
                </label>
            </div>
            <div className="review-radio-rec">
                <label>
                    <input type="radio" value="no" onChange={this.handleRadioRecClick} checked={this.state.rec === 'no'}/>
                    No
                </label>
            </div>
            <div>
                Characteristics:*
                {this.state.charsArr.map((item) => {
                    return (
                        <div className="review-characteristics" key={item.id}>
                            {item.name}:
                            <div className="review-characteristics-options"> 
                                {item.levels.map((level, i) => {
                                    return (
                                        <div className="review-characteristics-radio" key={i}>
                                            <label>
                                                <input type="radio" value={i+1} onChange={this.handleRadioClick} id={item.id} checked={this.state.characteristics[item.id] === i+1}/>
                                                {level}
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            <label> Nickname:*
                <input type="text" id="review-name-submission" />
                <div>For privacy reasons, do not use your full name or email address.</div>
            </label>
            <label> Email:*
                <input type="text" id="review-email-submission" />
                <div>For authentication reasons, you will not be emailed.</div>
            </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        )
    }
}

export default ReviewSubmission
