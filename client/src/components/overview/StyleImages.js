import React from 'react';
import magnify from './helpers.js';
import StyleSelect from './StyleSelect.js';

const StyleImages = ({store, setCurrent}) => {
  // console.log('inside StyleImages');
  // console.log(store.currentStyle);

  if (store.currentStyle) {
    let currentPic = store.currentStyle.photos[store.currentStyle['default?']].thumbnail_url;
    const onImgClick = (e) => {
      e.preventDefault();
      magnify("myimage", 3);
      // imageZoom("myimage", "myresult");
    }

    const setImage = (e) => {
      e.preventDefault();
      let current = document.getElementById('myimage');
      current.src = e.target.src;
      magnify("myimage", 3);
      // imageZoom("myimage", "myresult");
    }

    return (
      <div className="images">
        <div className="img-container img gallery">
          {store.currentStyle.photos.map((item) => {
            let picture = item.thumbnail_url;
            return (
              <img className="slide" src={picture} onClick={setImage} />
            );
          })}
        </div>
        <div className="img-zoom-container img">
          <img id="myimage" 
            src={currentPic}
            onClick={onImgClick}
            width="100%"
            height="100%"/>
        </div>
        <StyleSelect 
          store={store.styles}
          setCurrent={setCurrent}
          current={store.currentStyle}
          details={store.details}/>
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