import React from 'react';
const axios = require('axios');
import Moment from 'react-moment';
import { Typography, Grid, Button } from '@material-ui/core';

class QA extends React.Component {
  getData(product_id) {
    axios.get(`http://18.217.220.129/qa/${product_id})`).then(data => {
      this.props.getQA(data.data.results);
    });
  }
  componentDidMount() {
    this.getData(this.props.store.mainItem.product_id);
  }

  render() {
    let ques = this.props.store.questions;
    let qq = ques.questions || [];
    return (
      <div className='QA'>
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
          return (
            <div key={item.question_id}>
              <div>
                <Typography>{item.question_body}</Typography>
              </div>
              <div>
                <Typography>
                  <Moment format='MM/DD/YYYY' date={item.question_date} />
                </Typography>
              </div>
              <div>
                <Typography>
                  Did this help? {item.question_helpfulness}
                </Typography>
              </div>
              <div>
                {cleaned.map(each => {
                  console.log("each", each);
                  return (
                    <ul>
                      <li>
                        <Typography>{each}</Typography>
                      </li>
                    </ul>
                  );
                })}
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default QA;
