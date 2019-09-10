import React from 'react';
import magnify from './helpers.js';
import StyleSelect from './StyleSelect.js';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const StyleImages = ({store, setCurrent}) => {
  // console.log('inside StyleImages');
  // console.log(store.currentStyle);

  if (store.currentStyle) {
    let currentPic = store.currentStyle.photos[store.currentStyle['default?']].url;
    let slideIndex = store.currentStyle['default?'];

    // const showDivs = function(n) {
    //   let x = document.getElementsByClassName("mySlides");
    //   console.log(x);
    //   if (n > x.length) {slideIndex = 1}
    //   if (n < 1) {slideIndex = x.length}
    //   for (let i = 0; i < x.length; i++) {
    //     x[i].style.display = 'none';
    //   }
    //   x[slideIndex - 1].style.display = 'block';
    // }

    const plusDivs = function() {
      slideIndex++;
      if (slideIndex > store.currentStyle.photos.length - 1) {
        slideIndex = 0;
      }
      let current = document.getElementById('myimage');
      current.src = store.currentStyle.photos[slideIndex].url;
    }

    const minusDivs = function() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = store.currentStyle.photos.length - 1;
      }
      let current = document.getElementById('myimage');
      current.src = store.currentStyle.photos[slideIndex].url;
    }
  
    const onImgClick = (e) => {
      e.preventDefault();
      magnify("myimage", 3);
    }
  
    const setImage = (e) => {
      e.preventDefault();
      let current = document.getElementById('myimage');
      let newImg = e.target.getAttribute('key-i');
      // console.log(store.currentStyle.photos[newImg]);
      current.src = store.currentStyle.photos[newImg].url;
      magnify("myimage", 3);
    }

    return (
      <div className="images">

        <div className="img-container img gallery">
          {store.currentStyle.photos.map((item, index) => {
            let picture = item.url;
            return (
              <img 
                key={index}
                key-i={index}
                className="slide" 
                src={picture} 
                onClick={setImage} />
            );
          })}
        </div>

        <div className="img-zoom-container img">
          <img id="myimage" 
            src={currentPic}
            onClick={onImgClick}
            width="100%"
            height="100%"/>
          <button className="w3-button button-left" onClick={minusDivs}>&#10094;</button>
          <button className="w3-button w3-display-right" onClick={plusDivs}>&#10095;</button>
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
            <img className="mySlides" id="myimage" />
            <div id="myresult" className="img-zoom-result"></div>
          </div>  
        </div>
      );
  }

}

export default StyleImages;