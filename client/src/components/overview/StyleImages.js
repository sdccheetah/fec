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

    const setImage = (e) => {
      e.preventDefault();
      let current = document.getElementById('myimage');
      current.src = e.target.src;
      imageZoom("myimage", "myresult");
    }

    return (
      <div className="images">
        <div className="img-container img gallery">
          {store.styles.map((item) => {
            let picture = item.photos[item['default?']].thumbnail_url;
            return (
              <img src={picture} onClick={setImage} />
            );
          })}
        </div>
        <div className="img-zoom-container img">
          <img id="myimage" 
            src={currentPic}
            onClick={onImgClick}
            width="100%"
            height="100%"/>
          <div id="myresult" className="img-zoom-result"></div>
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