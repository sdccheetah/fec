import React from 'react';
import BasicList from './BasicList.js';

const InitPage = ({store, getInitMain}) => {

  return (
    <div>
      <BasicList 
        store={store}
        getInitMain={getInitMain}
      />
    </div>
  )
}

export default InitPage;