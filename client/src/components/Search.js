import React from 'react';
import { connect } from 'react-redux';
import { setSearch } from './../actions/setSearch.js';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  iconButton: {
    padding: 10
  }
});

const SearchQuestion = ({ keyword, setKeyword }) => {
  const classes = useStyles();
  console.log(keyword, 'mike');
  return (
    <div className='search'>
      <InputBase
        className='{classes.input}'
        variant='outlined'
        label='Search'
        placeholder='Have a question? Search for answers...'
        value={keyword}
        onChange={e => {
          console.log('onchange', e.target.value);
          setKeyword(e.target.value);
        }}
      />
      <IconButton className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    keyword: state.searchKeyword
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setKeyword: searchTerm => dispatch(setSearch(searchTerm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchQuestion);
