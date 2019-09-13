import React from 'react';
import Questions from './Questions';
import Search from './Search';
import { Typography, Box } from '@material-ui/core';
import './QA.css';

const QuestionAndAnswers = props => {
  return (
    <div className='QA'>
      <Box id='QA'>
        <Typography variant='h5'>Questions & Answers</Typography>
        <Search />
        <Questions store={props.store} getQA={props.getQA} />
      </Box>
    </div>
  );
};

export default QuestionAndAnswers;
