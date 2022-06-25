function rotateImage(tag) {
  let tr = tag.parentElement.parentElement;
  let name = tr.querySelector("td:first-child").textContent.replace("OLL ", "");
  let f2l = f2lList.find(elem => elem.id == name);

  if (/y$/.test(tag.textContent)) {
    f2l.y();
  } else if (/y'$/.test(tag.textContent)) {
    f2l.yPrime();
  }

  tr.replaceChild(document.createElement("td"), tr.children[1]);
  tr.querySelector("td:nth-child(2)").innerHTML += drawCube(f2l);

  let regex;
  switch (Math.abs(f2l.rotateCount) % 4) {
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
  let selector = createSelector(f2l, regex);
  tr.replaceChild(document.createElement("td"), tr.children[3]);
  tr.querySelector("td:nth-child(4)").innerHTML += selector;
}