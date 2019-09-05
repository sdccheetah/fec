import React from 'react';

const StyleSelect = ({store, setCurrent, current, details}) => {
  console.log('Style Select:');
  console.log(store);
  let currentSizes = [];
  let currentSku = 0;

  const selectColor = (e) => {
    e.preventDefault();
    let tempObj = { style: store[Number(e.target.id)] };
    setCurrent(tempObj);
  };

  const onChange = (e) => {
    currentSku = current.skus[currentSizes[e.target.value]];
    console.log(current.skus[currentSizes[e.target.value]]);
  }

  if (store) {

    for (let i in current.skus) {
      currentSizes.push(i);
    }
    currentSku = currentSizes[0];

    return (
      <div className="right-container">
        <div className="prod-details">
          <h4>{details.category}</h4>
          <h1>{details.name}</h1>
          <h4>{"$" + details.default_price}</h4>
        </div>
        <div className="select-container">
          <h3>Select Style:</h3>
          <div id="styleSelection">
            {store.map((item, index) => {
              let color = { "backgroundColor": item.name };
              return (
                <div className="circle" 
                  style={color} 
                  onClick={selectColor}
                  id={index}></div>
              );
            })}
          </div>
          <div className="size">
            <h3>Select Size:</h3>
            <div id="sizeSelection">
              <select onChange={onChange}>
                {currentSizes.map((item, index) => {
                  return (
                    <option key={index} value={index}>{item}</option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Nothing Yet</div>
  }
}

export default StyleSelect;