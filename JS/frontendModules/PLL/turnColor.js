function turnColor(tag) {
  let tr = tag.parentElement.parentElement;
  let name = tr.querySelector("td:first-child").textContent.replace("OLL ", "");
  let pll = pllList.find(elem => elem.id == name);

  if (pll.rubikCube.toggle2LayerColorsCount % 2 == 0)
    pll.rubikCube.toggle2LayerColors("on");
  else
    pll.rubikCube.toggle2LayerColors("off");

  tr.replaceChild(document.createElement("td"), tr.children[1]);
  tr.querySelector("td:nth-child(2)").innerHTML += drawSquare(pll);
  tr.replaceChild(document.createElement("td"), tr.children[2]);
  tr.querySelector("td:nth-child(3)").innerHTML += drawCube(pll);
}