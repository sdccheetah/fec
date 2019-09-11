export function magnify(imgID, zoom) {
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


export function setModal(imgName = "myimage", modalID = "myModal") {
  let modal = document.getElementById(modalID);

  let img = document.getElementById(imgName);
  let modalImg = document.getElementById("img01");
  img.onClick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }

  let span = document.getElementsByClassName("close")[0];
  span.onClick = function() {
    modal.style.display = "none";
  }
}
