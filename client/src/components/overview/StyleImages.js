import React from 'react';
import imageZoom from './helpers.js';

const StyleImages = ({store}) => {
  console.log('inside StyleImages');
  console.log(store.currentStyle);

  if (store.styles) {
    let currentPic = store.currentStyle.photos[store.currentStyle['default?']].thumbnail_url;
    const onImgClick = (e) => {
      e.preventDefault();
      imageZoom("myimage", "myresult");
    }

    return (
      <div>
        <div className="img-zoom-container">
          <img id="myimage" 
            src={currentPic}
            onClick={onImgClick}
            width="50%"
            height="50%"/>
          <div id="myresult" className="img-zoom-result"></div>
        </div>  
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
      </div>
    );
  } else {
    return (
        <div>
          <div className="img-zoom-container">
            <img id="myimage" />
            <div id="myresult" className="img-zoom-result"></div>
          </div>  
        </div>
      );
  }

}

export default StyleImages;