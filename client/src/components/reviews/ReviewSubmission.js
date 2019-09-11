import React from 'react';
import './reviews.css';

class ReviewSubmission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
            starsArr: [0,0,0,0,0],
            oldArr: [0,0,0,0,0],
            rec: "yes",
            charsArr: [],
            characteristics: {},
            nameEntry: "Example: jackson11!",
            emailEntry: "Example: jackson11@email.com",
            summaryEntry: "Example: Best purchase ever!",
            bodyEntry: "Why did you like the product or not?",
            bodyMin: "Minimum characters required left: 15"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStarsHover = this.handleStarsHover.bind(this);
        this.handleStarsClick = this.handleStarsClick.bind(this);
        this.handleStarsLeave = this.handleStarsLeave.bind(this);
        this.handleRadioClick = this.handleRadioClick.bind(this);
        this.handleRadioRecClick = this.handleRadioRecClick.bind(this);
        this.handleStopReview = this.handleStopReview.bind(this);
        this.handleAddReview = this.handleAddReview.bind(this);
        this.handleChange = this.handleChange.bind(this);

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
        console.log(this.state.nameEntry);
        console.log(this.state.emailEntry);
        console.log(this.state.summaryEntry);

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

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });

        if(name === "summaryEntry" || name === "nameEntry" || name === "emailEntry") {
            this.setState({
                [name]: value.substring(0,60)
            });
        } else if (name === "bodyEntry") {
            let length = this.state.bodyEntry.length;
            if (length < 50) {
                this.setState({
                    bodyMin: "Minimum characters required left: " + (50 - length)
                });
            } else {
                this.setState({
                    bodyMin: "Minimum reached"
                });
            }
        }
    
    }
    
    handleAddReview(event) {
      event.preventDefault();
      this.setState({
          showing: true
      }, () => {
        let modal = document.getElementById("review-submission");
        modal.style.display = "block";
      });
    }

    handleStopReview(event) {
        event.preventDefault();
        let name = event.target.getAttribute("class");
        if(name === "review-modal-content" || name === "review-form-close") {
            this.setState({
                showing: false
            });
        }
    }


    render() {
        return (
            <div>
            <button onClick={this.handleAddReview}>Add Review</button> <br/>
            {this.state.showing && (<div className="review-modal" id="review-submission" onClick={this.handleStopReview}><div className="review-modal-content"><div className="review-form">
            <span className="review-form-close" onClick={this.handleStopReview}>&times;</span>
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
            <label> Summary: <br/>
                <input type="text" id="review-summary-submission" name="summaryEntry" maxlenth="60" value={this.state.summaryEntry} onChange={this.handleChange}/>
            </label>
            <div> Body:* <br/>
                <textarea id="review-summary-body" name="bodyEntry" value={this.state.bodyEntry} onChange={this.handleChange}/> <br/>
                {this.state.bodyMin}
            </div>
            <label> Nickname:* <br/>
                <input type="text" id="review-name-submission" name="nameEntry" value={this.state.nameEntry} onChange={this.handleChange}/>
                <div>For privacy reasons, do not use your full name or email address.</div>
            </label>
            <label> Email:* <br/>
                <input type="text" id="review-email-submission" name="emailEntry" value={this.state.emailEntry} onChange={this.handleChange}/>
                <div>For authentication reasons, you will not be emailed.</div>
            </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
            </div></div></div>)}</div>
        )
    }
}

export default ReviewSubmission
