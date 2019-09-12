import React, { Fragment } from 'react';
import axios from 'axios';
// import UploadImage from './UploadImage';
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
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    'border-radius': 0,
    padding: '15px'
  },
  root: {
    textAlign: 'center'
  },
  checkMark: {
    width: 50,
    height: 50,
    color: 'green'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
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
    let errorList = validate(form, 'answer', null);
    setErrors(errorList);
    if (!errorList) {
      submitForm(form, question_id);
    }
  };

  const handleUpload = images => {
    setForm(prevState => {
      return { ...prevState, photos: images };
    });
  };
  function handleClickOpen() {
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
      <Button onClick={handleClickOpen}>Add answer</Button>
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
            <DialogTitle>Submit your Answer</DialogTitle>
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
                  What is your nickname
                </InputLabel>
                <TextField
                  id='nickname'
                  required
                  // label="What is your nickname"
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
              </form>
            </DialogContent>
            <DialogActions>
              <Grid container justify='flex-end'>
                <Button onClick={handleClose} color='secondary'>
                  Cancel
                </Button>
                <Button
                  onClick={e => {
                    console.log('submitted');
                    event.preventDefault();
                    handleSubmit();
                  }}>
                  Submit
                </Button>
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
