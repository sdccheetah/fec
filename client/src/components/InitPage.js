import React from 'react';
import BasicList from './BasicList.js';
import StyleImages from './overview/StyleImages.js';
import ProductInfo from './overview/ProductInfo.js';

const InitPage = ({store, getInitMain, getStyles}) => {

  return (
    <div>
      <BasicList 
        store={store}
        getInitMain={getInitMain}
        getStyles={getStyles}
      />
      <StyleImages
        store={store.mainItem}
      />
      <ProductInfo
        store={store.mainItem}
      />
    </div>
  )
}

export default InitPage;