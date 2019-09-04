import React from 'react';

const StyleSelect = ({store}) => {
  console.log('Style Select:');
  console.log(store);
  if (store) {
    return (
      <div>
        <h3>Select Style:</h3>
        <select>
          {store.map((item, index) => {
            return <option value={item.style_id} key={index}>{item.name}</option>
          })}
        </select>
      </div>
    );
  } else {
    return <div>Nothing Yet</div>
  }
}

export default StyleSelect;