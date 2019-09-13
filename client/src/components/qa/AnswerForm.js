import React, { Fragment } from 'react';
import axios from 'axios';
const { API_KEY } = require('../reviews/config');
const client = filestack.init(API_KEY);
import { clickTracker } from '../overview/helpers.js';
import { validate } from './ValidateForm';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
  TextField,
  Grid,
  Button,
  Slide,
  Box,
  InputLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    'border-radius': 0,
    padding: '15px'
  },
  root: {
    textAlign: 'center'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='right' ref={ref} {...props} />;
});

const defaultForm = {
  answer: '',
  email: '',
  name: '',
  photos: []
};

const renderErrors = errorList => {
  if (!errorList || errorList.length === 0) {
    return;
  } else {
    return (
      <ul className='errors'>
        You must enter the following:
        {Object.values(errorList).map(err => {
          return (
            <li className='error' key={err}>
              {err}
            </li>
          );
        })}
      </ul>
    );
  }
};

const AnswerForm = ({ product, question, question_id, answer }) => {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState(defaultForm);
  const [error, setErrors] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const classes = useStyles();

  const handleChange = e => {
    e.persist();
    setForm(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleUpload = event => {
    event.preventDefault();
    let photos = [];
    let process = uploadData => {
      let allPhotos = uploadData.filesUploaded;
      for (let i = 0; i < allPhotos.length; i++) {
        photos.push(allPhotos[i].url);
      }
      this.setState({
        photos: photos
      });
    };
    const options = {
      maxFiles: 5,
      accept: [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/bmp',
        'image/gif',
        'application/pdf'
      ],
      storeTo: {
        container: 'devportal-customers-assets',
        path: 'user-uploads/',
        region: 'us-east-1'
      },
      fromSources: ['local_file_system'],
      uploadInBackground: false,
      onUploadDone: process
    };

    client.picker(options).open();
  };

  const submitForm = (form, question_id) => {
    axios({
      method: 'post',
      url: `http://18.217.220.129/qa/${question_id}/answers`,
      data: {
        body: form.answer,
        name: form.name,
        email: form.email,
        photos: form.photos
      }
    })
      .then(data => {
        setSuccess(true);
      })
      .catch(err => {
        console.log(err);
        alert('Error occurred when submitting your answer');
      });
  };

  const handleSubmit = e => {
    clickTracker('moreAnswers', 'QandA');
    let errorList = validate(form, 'answer', null);
    setErrors(errorList);
    if (!errorList) {
      submitForm(form, question_id);
    }
  };

  function handleClickOpen() {
    clickTracker('click', 'QandA');
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
    setForm(defaultForm);
    setErrors(false);
    setSuccess(false);
  }

  return (
    <Fragment>
      <button onClick={handleClickOpen}>Add Answer</button>
      <Dialog
        TransitionComponent={Transition}
        maxWidth='sm'
        fullWidth={!success}
        open={open}
        onClose={handleClose}
        onClick={success ? handleClose : () => {}}
        aria-labelledby='form-dialog-title'>
        {!success ? (
          <Fragment>
            {' '}
            <DialogTitle>Submit your Answer!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {product}: {question}
              </DialogContentText>
              {renderErrors(error)}
              <form>
                <InputLabel
                  htmlFor='answerbody'
                  required
                  error={error.answer ? true : false}>
                  Your answer
                </InputLabel>
                <TextField
                  id='answerbody'
                  multiline
                  required
                  inputProps={{ maxLength: 1000 }}
                  fullWidth
                  onChange={handleChange.bind(this)}
                  value={form.answer}
                  error={error.answer ? true : false}
                  name='answer'
                />
                <InputLabel
                  htmlFor='nickname'
                  required
                  error={error.name ? true : false}>
                  Nickname
                </InputLabel>
                <TextField
                  id='nickname'
                  required
                  label='What is your nickname'
                  placeholder='Example: jack543!'
                  fullWidth
                  required
                  helperText='For privacy reasons, do not use your full name or email address'
                  onChange={handleChange.bind(this)}
                  value={form.name}
                  name='name'
                  error={error.name ? true : false}
                />
                <InputLabel
                  htmlFor='email'
                  required
                  error={error.name ? true : false}>
                  Your email
                </InputLabel>
                <TextField
                  id='email'
                  required
                  fullWidth
                  inputProps={{ maxLength: 60 }}
                  placeholder='jack@email.com'
                  helperText='For authentication reasons, you will not be emailed'
                  onChange={handleChange.bind(this)}
                  value={form.email}
                  error={error.email ? true : false}
                  name='email'
                />
                <button onClick={handleUpload}>Upload Photos</button>
              </form>
            </DialogContent>
            <DialogActions>
              <Grid container justify='flex-end'>
                <button onClick={handleClose} color='secondary'>
                  Cancel
                </button>
                <button
                  onClick={e => {
                    console.log('submitted');
                    event.preventDefault();
                    handleSubmit();
                  }}>
                  Submit
                </button>
              </Grid>
            </DialogActions>
          </Fragment>
        ) : (
          <Fragment>
            <DialogTitle>Great! Thanks for the submission.</DialogTitle>
          </Fragment>
        )}
      </Dialog>
    </Fragment>
  );
};

export default AnswerForm;
