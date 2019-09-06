import React from 'react';
const axios = require('axios');

const BasicList = ({store, getInitMain, getStyles}) => {
//   console.log('initial state');
//   console.log(store);
  if (!store.mainItem.init) {
    const getData = () => {
      axios.get(`http://18.217.220.129/products/${store.mainItem.product_id}`)
      .then(data => {
        getInitMain(data.data);
        axios.get(`http://18.217.220.129/products/${store.mainItem.product_id}/styles`)
        .then(data => {
          getStyles(data.data.results);
        })
      });
    }

    getData();

    return (
      <div>
        <h2>Nothing Here!</h2>
      </div>
    );
  } else {
    // console.log('random get productid');
    // console.log(store);
    return (
      <div>
      </div>
    );
  }
};

export default BasicList;
