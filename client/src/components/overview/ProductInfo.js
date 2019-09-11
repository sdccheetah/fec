import React from 'react';

const ProductInfo = ({store}) => {
  // console.log('product info store');
  // console.log(store);
  if (store.details) {
    return (
      <div className="descript-container">
        <div className="descript">
          <h3>{store.details.slogan}</h3>
          <h4>{store.details.description}</h4>
        </div>
        <div className="features">
          <h3>Features:</h3>
          <ul>
            {store.details.features.map((item, index) => {
              let featureStr = '';
              if (item.value && item.value !== "null") {
                featureStr = `${item.feature}: ${item.value}`;
              } else {
                featureStr = item.feature;
              }
              return (
                <li key={index}>
                  {featureStr}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return <div>No Info</div>
  }
}

export default ProductInfo;