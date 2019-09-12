import React from 'react';
import { customSelects } from './helpers.js';
import FiveStars from './../reviews/FiveStars.js';

const StyleSelect = ({store, setCurrent, current, details, reviews}) => {
  // console.log('Style Select:');
  // console.log(current);
  // console.log(details);

  let currentSizes = [];
  let currentSku = 0;
  let quant = 1;

  const selectColor = (e) => {
    e.preventDefault();
    let tempObj = { style: store[Number(e.target.id)] };
    setCurrent(tempObj);
    if (document.getElementsByClassName("img-magnifier-glass")) {
      let toRemove = document.getElementsByClassName("img-magnifier-glass");
      while (toRemove.length > 0) {
        toRemove[0].parentNode.removeChild(toRemove[0]);
      }
    }
    let clearClass = document.getElementsByClassName('slide');
    for (let i = 0; i < clearClass.length; i++) {
      clearClass[i].className = 'slide';
    }
  };

  const onAdd = (e) => {
    e.preventDefault();
    console.log(currentSku);
    console.log(quant);
  }

  const changeQty = (e) => {
    quant = Number(e.target.value);
  }

  const onChange = (e) => {
    let index = Number(e.target.value);
    currentSku = current.skus[currentSizes[index]];
  }

  const prices = () => {
    if (current.sale_price > 0) {
      return (
        <div>
          <h5 className="orig-price"><strike>{"Price: $" + current.original_price}</strike></h5>
          <h5 className="sale-price">{"Sale: $" + current.sale_price}</h5>
        </div>
      );
    } else {
      return (
        <div>
          <h5 className="orig-price">{"Price: $" + current.original_price}</h5>
        </div>
      );
    }
  }
  window.onload = customSelects;
  if (store) {

    let quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i in current.skus) {
      currentSizes.push(i);
    }
    currentSku = current.skus[currentSizes[0]];

    return (
      <div className="right-container">
        <FiveStars rating={reviews.average}/>
        <div className="prod-details">
          <h4>Category > {details.category}</h4>
          <h1>{details.name}</h1>
          {prices()}
        </div>
        <div className="select-container">
          <h3>Selected Style: {current.name}</h3>
          <div id="styleSelection">
            {store.map((item, index) => {
              let srcURL = 'https://s3.us-east-2.amazonaws.com/media.littleconquest.com/uploads/2017/06/404-Placeholder.png';
              if (item.photos[item['default?']] !== null) {
                srcURL = item.photos[item['default?']].url;
              }
              return (
                <div className="circle" 
                  key={index}
                  onClick={selectColor}
                  id={index}>
                  <img className="style-thumbnail" 
                    src={srcURL}
                    key={index}
                    id={index}
                    onClick={selectColor}
                    alt="style"/>
                </div>
              );
            })}
          </div>
          <div className="size">
            <h3>Select Size:</h3>
            <div className="custom-select" style={{width: '200px'}}>
              <select onChange={onChange}>
                {currentSizes.map((item, index) => {
                  return (
                    <option value={index}
                      key={index}>{item}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="quantity">
            <h3>Select Quantity:</h3>
            <div className="custom-select" style={{width: '100px'}}>
              <select onChange={changeQty}>
                {quantity.map((item, index) => {
                  return (
                    <option key={index}
                      value={item}>{item}</option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="addCart">
            <button 
              id="addCartButton"
              onClick={onAdd}>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Nothing Yet</div>
  }
}

export default StyleSelect;