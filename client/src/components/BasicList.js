import React from 'react';

const BasicList = ({list}) => {
  
  if (!list) {
    return (
      <div>
        <h2>Nothing Here!</h2>
      </div>
    );
  } else {
    console.log('basiclist');
    console.log(list);
    return (
      <div>
        {list.map((item) => {
          return (
            <ul key={item.name}>
            <li>Name: {item.name}</li>
            <li>Slogan: {item.slogan}</li>
            <li>Description: {item.description}</li>
            <li>Category: {item.category}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default BasicList;