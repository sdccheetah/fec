import React from 'react';

const ProductInfo = ({store}) => {
//   console.log('product info store');
//   console.log(store);
  if (store.details) {
    return (
      <div className="descript">
        <h2>{store.details.name + ' - Price: ' + store.details.default_price}</h2>
        <h3>{store.details.slogan}</h3>
        <h4>{store.details.description}</h4>
      </div>
    );
  } else {
    return <div>No Info</div>
  }
}

export default ProductInfo;