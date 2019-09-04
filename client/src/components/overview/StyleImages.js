import React from 'react';

const StyleImages = ({store}) => {
  console.log('inside StyleImages');
  console.log(store.styles);
  
  if (store.styles) {
    return (
      <div className="imagesRow">Images
        {store.styles.map((item) => {
          let picture = item.photos[item['default?']].thumbnail_url;
          return (
            <div className="imagesCol">
              <img src={picture} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>No Item Selected</div>
    );
  }

}

export default StyleImages;