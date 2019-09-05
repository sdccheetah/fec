// const imageZoom = (imgID, resultID, pic) => {

//   if (document.getElementById(imgID)) {

//     const getCursorPos = (e) => {
//       e = e || window.event;
//       let a = img.getBoundingClientRect();
//       let x = e.pageX - a.left;
//       let y = e.pageY - a.top;
//       x = x - window.pageXOffset;
//       y = y - window.pageYOffset;
//       return { x: x, y: y };
//     }

//     const moveLens = (e) => {
//       e.preventDefault();
//       let pos = getCursorPos(e);
//       let x = pos.x - (lens.offsetWidth / 2);
//       let y = pos.y - (lens.offsetHeight / 2);
//       if (x > img.width - lens.offsetWidth) {
//         x = img.width - lens.offsetWidth;
//       }
//       if (x < 0) {
//         x = 0;
//       }
//       if (y > img.height - lens.offsetHeight) {
//         y = img.height - lens.offsetHeight;
//       }
//       if (y < 0) {
//           y = 0;
//       }
//       lens.style.left = x + "px";
//       lens.style.top = y + "px";
//       result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
//     }

//     let img = document.getElementById(imgID);
//     let result = document.getElementById(resultID);
//     // creating lens:
//     let lens = document.createElement("DIV");
//     lens.setAttribute("class", "img-zoom-lens");
//     // insert lens:
//     img.parentElement.insertBefore(lens, img);
//     // Calc ratio between div and lens:
//     let cx = result.offsetWidth / lens.offsetWidth;
//     let cy = result.offsetHeight / lens.offsetHeight;
//     // set background properties for div
//     result.style.backgroundImage = "url('" + img.src + "')";
//     result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
//     // execute func when lens moved across img:
//     lens.addEventListener("mousemove", moveLens);
//     img.addEventListener("mousemove", moveLens);

//   }
// }


function magnify(imgID, zoom) {
  let img = document.getElementById(imgID);

  if (document.getElementsByClassName("img-magnifier-glass")) {
    let toRemove = document.getElementsByClassName("img-magnifier-glass");
    while (toRemove.length > 0) {
      toRemove[0].parentNode.removeChild(toRemove[0]);
    }
  }

  let glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  img.parentElement.insertBefore(glass, img);

  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  let bw = 3;
  let w = glass.offsetWidth / 2;
  let h = glass.offsetHeight / 2;

  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  function moveMagnifier(e) {
    e.preventDefault();
    let pos = getCursorPos(e);
    let x = pos.x;
    let y = pos.y;
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    let x = 0;
    let  y = 0;
    e = e || window.event;
    let a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x: x, y: y};
  }
}


export default magnify;