import React from 'react';
import { magnify, setModal } from './helpers.js';
import StyleSelect from './StyleSelect.js';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const StyleImages = ({store, setCurrent, reviews}) => {
  // console.log('inside StyleImages');
  // console.log(reviews);

  if (store.currentStyle) {
    let currentPic = store.currentStyle.photos[store.currentStyle['default?']].url;
    let slideIndex = store.currentStyle['default?'];
    let tempPrevImg = null;

    const setMagClick = function() {
      let temp = document.getElementById("myimage");
      temp.removeEventListener("click", setModal);
      temp.addEventListener("click", onImgClick);
    }
    const setModClick = function() {
      if (document.getElementsByClassName("img-magnifier-glass")) {
        let toRemove = document.getElementsByClassName("img-magnifier-glass");
        while (toRemove.length > 0) {
          toRemove[0].parentNode.removeChild(toRemove[0]);
        }
      }
      let temp = document.getElementById("myimage");
      temp.removeEventListener("click", onImgClick);
      temp.addEventListener("click", setModal);
    }

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
      if (tempPrevImg) {
        tempPrevImg.className = "slide";
      }
      e.target.className = "slide active";
      tempPrevImg = e.target;
      // console.log(store.currentStyle.photos[newImg]);
      current.src = store.currentStyle.photos[newImg].url;
      magnify("myimage", 3);
    }

    return (
      <div className="images">

        <div className="img-container img gallery">
          {store.currentStyle.photos.map((item, index) => {
            let picture = item.url;
            let cName = '';
            if (index === slideIndex) {
              cName = "slide active";
            } else {
              cName = "slide";
            }
            return (
              <img 
                key={index}
                key-i={index}
                className={cName} 
                src={picture} 
                onClick={setImage}
                alt="Gallery Image" />
            );
          })}
        </div>

        <div className="img-zoom-container img">
          <img id="myimage" 
            src={currentPic}
            // onClick={onImgClick}
            width="100%"
            height="100%"
            alt="Main Product Image"/>
          <div id="myModal" className="modal">
            <span className="close">&times;</span>
            <img className="modal-content" id="img01" />
          </div>
          <button className="w3-button button-left" onClick={minusDivs}>&#10094;</button>
          <button className="w3-button w3-display-right" onClick={plusDivs}>&#10095;</button>
        </div>

        <StyleSelect 
          store={store.styles}
          setCurrent={setCurrent}
          current={store.currentStyle}
          details={store.details}
          reviews={reviews}/>

        <button className="mode-buttons" onClick={setMagClick}>Set Mag</button>
        <button className="mode-buttons" onClick={setModClick}>Set Mod</button>
      </div>
    );
  } else {
    return (
        <div>
          <div className="img-zoom-container">
            <img className="mySlides" id="myimage" alt="nothing here"/>
            <div id="myresult" className="img-zoom-result"></div>
          </div>  
        </div>
      );
  }

}

export default StyleImages;