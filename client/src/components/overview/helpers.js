const imageZoom = (imgID, resultID, pic) => {
console.log('imageZoom, not if');
  if (document.getElementById(imgID)) {
        console.log("In imageZoom");
    const getCursorPos = (e) => {
      e = e || window.event;
      let a = img.getBoundingClientRect();
      let x = e.pageX - a.left;
      let y = e.pageY - a.top;
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }

    const moveLens = (e) => {
      e.preventDefault();
      let pos = getCursorPos(e);
      let x = pos.x - (lens.offsetWidth / 2);
      let y = pos.y - (lens.offsetHeight / 2);
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
          y = 0;
      }
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }

    let img = document.getElementById(imgID);
    let result = document.getElementById(resultID);
    // creating lens:
    let lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    // insert lens:
    img.parentElement.insertBefore(lens, img);
    // Calc ratio between div and lens:
    let cx = result.offsetWidth / lens.offsetWidth;
    let cy = result.offsetHeight / lens.offsetHeight;
    // set background properties for div
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    // execute func when lens moved across img:
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);

  }
}

export default imageZoom;