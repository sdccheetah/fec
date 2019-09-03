import React from 'react';
import BasicList from './BasicList.js';

const InitPage = ({store, getInitList}) => {

  return (
    <div>
      <BasicList 
        store={store.list}
        getInitList={getInitList}
      />
    </div>
  )
}

export default InitPage;