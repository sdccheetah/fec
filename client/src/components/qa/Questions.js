import React from 'react';
const axios = require('axios');
import Moment from 'react-moment';
import { Typography, Container, Modal, Grid, Button } from '@material-ui/core';
import Question from './Question';
import QuestionButtons from './QuestionButtons';
import { clickTracker } from '../overview/helpers.js';
import QuestionForm from './QuestionForm';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: 4,
      product_id: this.props.store.mainItem.product_id || null
    };
    this.loadMore = this.loadMore.bind(this);
    this.voteQ = this.voteQ.bind(this);
  }

  loadMore() {
    //loads more questions each time clicked
    clickTracker('loadMoreQuestions', 'QandA');
    if (this.state.load < 2)
      this.setState({
        load: this.state.load + 2
      });
  }

  resetQuestions() {
    clickTracker('resetQuestionForm', 'QandA');
    this.setState({
      load: 4
    });
  }

  voteQ(question_id) {
    // votes on a question based on the question id and updates the data
    clickTracker('voteQuestionForm', 'QandA');
    axios
      .put(`http://18.217.220.129/qa/question/${question_id}/helpful`)
      .then(res => {
        this.props.getData(
          this.props.store.mainItem.product_id,
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
    // pulls the data based on mainItem product_id and adds to the store
    axios.get(`http://18.217.220.129/qa/${product_id}`).then(data => {
      this.props.getQA(data.data.results);
    });
  }

  // -------------------------

  componentDidMount() {
    this.getData(this.props.store.mainItem.product_id);
  }

  render() {
    // check to see if product id is the same
    // console.log('this state', this.state.product_id);
    // console.log('mainitem', this.props.store.mainItem.product_id);

    // if (
    //   parseInt(this.state.product_id) !==
    //   parseInt(this.props.store.mainItem.product_id)
    // ) {
    //   this.setState({
    //     product_id: this.props.store.mainItem.product_id
    //   });
    //   this.props.getQA(this.props.store.mainItem.product_id);
    // }
    let qq = this.props.store.questions.questions || [];
    if (qq.length > 0) {
      return (
        <div className='QA'>
          {qq.map((question, index) => {
            if (index < this.state.load) {
              return (
                <div key={question.question_id}>
                  <Question
                    question={question}
                    key={question.question_id}
                    voteQ={this.voteQ}
                    store={this.props.store}
                  />
                </div>
              );
            }
          })}
          <QuestionButtons
            loadMore={this.loadMore.bind(this)}
            resetQuestions={this.resetQuestions.bind(this)}
            showLess={this.state.load > 4}
            showLoadMore={this.state.load < qq.length}
          />
        </div>
      );
    } else {
      return <QuestionButtons showLoadMore={false} />;
    }
  }
}
export default Questions;
