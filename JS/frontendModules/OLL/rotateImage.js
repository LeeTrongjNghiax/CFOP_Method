function rotateImage(tag) {
  let tr = tag.parentElement.parentElement;
  let name = tr.querySelector("td:first-child").textContent.replace("OLL ", "");
  let oll = ollList.find(elem => elem.id == name);

  if (/y$/.test(tag.textContent)) {
    oll.y();
  } else if (/y'$/.test(tag.textContent)) {
    oll.yPrime();
  }

  tr.replaceChild(document.createElement("td"), tr.children[1]);
  tr.querySelector("td:nth-child(2)").innerHTML += drawSquare(oll);
  tr.replaceChild(document.createElement("td"), tr.children[2]);
  tr.querySelector("td:nth-child(3)").innerHTML += drawCube(oll);

  let regex;
  switch (Math.abs(oll.rotateCount) % 4) {
    case 1:
      regex = /^y /;
      break;
    case 2:
      regex = /^y2 /;
      break;
    case 3:
      regex = /^y' /;
      break;
    default:
      regex = /[^y]/;
  }
  let selector = createSelector(oll, regex);
  tr.replaceChild(document.createElement("td"), tr.children[4]);
  tr.querySelector("td:nth-child(5)").innerHTML += selector;
}