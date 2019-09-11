import React from 'react';
import Questions from './Questions';
import Search from './Search';
import { Typography, Box } from '@material-ui/core';

const QuestionAndAnswers = props => {
  console.log(props);
  return (
    <Box id='QA'>
      <Typography variant='h5'>QUESTIONS/ANSWERS</Typography>
      <Search />
      <Questions store={props.store} getQA={props.getQA} />
    </Box>
  );
};

export default QuestionAndAnswers;
