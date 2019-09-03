import React from 'react';
import BasicList from './BasicList.js';
const axios = require('axios');

const InitPage = ({list, getInitList}) => {

  const getData = () => {
    axios.get('http://18.217.220.129/products/list')
    .then(data => {
      getInitList(data.data);
    });
  }

  const componentDidMount = () => {
    console.log("App mounted successfully!");
    getData();
  }

  getData();

  return (
    <div>
      <BasicList 
        list={list}
      />
    </div>
  )
}

export default InitPage;