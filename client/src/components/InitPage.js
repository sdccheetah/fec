import React from 'react';
import BasicList from './BasicList.js';
import StyleImages from './overview/StyleImages.js';
import ProductInfo from './overview/ProductInfo.js';
import css from './overview/Overview.css';

const InitPage = ({store, getInitMain, getStyles, setCurrent}) => {

  return (
    <div>
      <BasicList 
        store={store}
        getInitMain={getInitMain}
        getStyles={getStyles}
      />
      <StyleImages
        store={store.mainItem}
        setCurrent={setCurrent}
      />
      <ProductInfo
        store={store.mainItem}
      />
    </div>
  )
}

export default InitPage;