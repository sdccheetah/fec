import React from 'react';

const StyleSelect = ({store}) => {
//   console.log('Style Select:');
//   console.log(store);
  if (store) {
    return (
      <div id="styleSelection">
        {store.map((item, index) => {
          let color = { "backgroundColor": item.name };
          return (
            <div className="circle" style={color}></div>
          );
        })}
      </div>
    );
  } else {
    return <div>Nothing Yet</div>
  }
}

export default StyleSelect;