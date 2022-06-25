function turnColor(tag) {
  let tr = tag.parentElement.parentElement;
  let name = tr.querySelector("td:first-child").textContent.replace("OLL ", "");
  let oll = ollList.find(elem => elem.id == name);

  if (oll.toggle2LayerColorsCount % 2 == 0)
    oll.toggle2LayerColors("on");
  else
    oll.toggle2LayerColors("off");

  tr.replaceChild(document.createElement("td"), tr.children[1]);
  tr.querySelector("td:nth-child(2)").innerHTML += drawSquare(oll);
  tr.replaceChild(document.createElement("td"), tr.children[2]);
  tr.querySelector("td:nth-child(3)").innerHTML += drawCube(oll);
}