import React from 'react';

const StyleSelect = ({store, setCurrent}) => {
//   console.log('Style Select:');
//   console.log(store);
  const selectColor = (e) => {
    e.preventDefault();
    let tempObj = { style: store[Number(e.target.id)] };
    setCurrent(tempObj);
  };

  if (store) {
    return (
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
    );
  } else {
    return <div>Nothing Yet</div>
  }
}

export default StyleSelect;