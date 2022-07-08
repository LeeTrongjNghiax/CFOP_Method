function turnU(tag) {
  let tr = tag.parentElement.parentElement;

  let turn = tr.children[4].children[0].innerHTML;

  let name = tr.querySelector("td:first-child").textContent.replace("OLL ", "");
  let pll = pllList.find(elem => elem.id == name);

  if (tag.innerHTML == "U") pll.U();
  else pll.R();

  tr.replaceChild(document.createElement("td"), tr.children[1]);
  tr.querySelector("td:nth-child(2)").innerHTML += drawSquare(pll);
  tr.replaceChild(document.createElement("td"), tr.children[2]);
  tr.querySelector("td:nth-child(3)").innerHTML += drawCube(pll);

  let regex;
  switch (Math.abs(pll.rotateCount) % 4) {
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
  let selector = createSelector(pll, regex);
  tr.replaceChild(document.createElement("td"), tr.children[3]);
  tr.querySelector("td:nth-child(4)").innerHTML += selector;
}