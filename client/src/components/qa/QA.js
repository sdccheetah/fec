import React from 'react';
const axios = require('axios');
import Moment from 'react-moment';
import { Typography, Container, Modal, Grid, Button } from '@material-ui/core';
import Search from './Search.js';
import { makeStyles } from '@material-ui/core/styles';
import QuestionButtons from './QuestionButtons.js';
class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: 2
    };
    this.loadMore = this.loadMore.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.store.product_id !== prevProps.product_id ||
      this.props.searchKeyword !== prevProps.searchKeyword
    ) {
      this.props.getData(this.props.store.product_id);
    }
  }

  loadMore() {
    console.log('questions', this.props.store.questions);
    if (this.state.load < this.props.store.questions.length)
      this.setState({
        load: this.state.load + 2
      });
  }
  reset() {
    this.setState({
      load: 2
    });
  }

  voteQuestion(question_id) {
    axios
      .put(`http://18.222.40.124/qa/question/${question_id}/helpful`)
      .then(res => {
        this.props.getQuestions(
          this.props.product_id,
          1,
          50,
          this.props.searchKeyword
        );
      })
      .catch(err => {
        console.log(err);
      });
  }
  getData(product_id) {
    axios.get(`http://18.217.220.129/qa/${product_id}`).then(data => {
      this.props.getQA(data.data.results);
    });
  }
  componentDidMount() {
    this.getData(this.props.store.mainItem.product_id);
  }
  collapesQuestions() {
    this.setState({
      load: 4
    });
  }

  render() {
    // check to see if product id is the same
    let ques = this.props.store.questions;
    let qq = ques.questions || [];
    return (
      <div className='QA'>
        <Search />
        {qq.map(item => {
          let cleaned = [];
          let getAnswers = () => {
            let answerslist = item.answers;
            for (var key in answerslist) {
              let each = answerslist[key].body;
              cleaned.push(each);
            }
          };
          getAnswers();
          console.log('each question', item);
          return (
            <div key={item.question_id}>
              <div>
                <Typography>Q: {item.question_body}</Typography>
                <Typography>
                  Did this help? {item.question_helpfulness}
                  <br></br>
                  <Moment format='MM/DD/YYYY' date={item.question_date} />
                </Typography>
              </div>
              {/* <div>
                <Typography>
                  Did this help? {item.question_helpfulness}
                  <br></br>
                  <Moment format='MM/DD/YYYY' date={item.question_date} />
                </Typography>
              </div> */}

              <div>
                <Typography>
                  A:
                  {cleaned.map((each, index) => {
                    return (
                      <ul key={index}>
                        <li>
                          <Typography>{each}</Typography>
                        </li>
                      </ul>
                    );
                  })}
                </Typography>
              </div>
              <hr />
            </div>
          );
        })}
        <QuestionButtons
          loadMore={this.loadMore.bind(this)}
          collapesQuestions={this.collapesQuestions.bind(this)}
          showCollapes={this.state.load > 4}
          showLoadMore={this.state.load < qq.length}
        />
      </div>
    );
  }
}

export default QA;
