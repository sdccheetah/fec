import React from 'react';
const axios = require('axios');

const BasicList = ({store, getInitList}) => {
  console.log('initial state');
  console.log(store);
  if (!store.init) {
    const getData = () => {
      axios.get('http://18.217.220.129/products/list')
      .then(data => {
        getInitList(data.data);
      });
    }

    getData();
    
    return (
      <div>
        <h2>Nothing Here!</h2>
      </div>
    );
  } else {

    return (
      <div>
        {store.list.map((item) => {
          return (
            <ul key={item.name}>
            <li>Name: {item.name}</li>
            <li>Slogan: {item.slogan}</li>
            <li>Description: {item.description}</li>
            <li>Category: {item.category}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default BasicList;