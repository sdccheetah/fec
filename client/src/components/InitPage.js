import React from 'react';
import BasicList from './BasicList.js';
import StyleImages from './overview/StyleImages.js';
import ProductInfo from './overview/ProductInfo.js';
import StyleSelect from './overview/StyleSelect.js';
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
      />
      {/* <ProductInfo
        store={store.mainItem}
      />
      <StyleSelect
        store={store.mainItem.styles}
        setCurrent={setCurrent}
      /> */}
    </div>
  )
}

export default InitPage;