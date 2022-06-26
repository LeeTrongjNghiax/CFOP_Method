function rotateColorScheme(tag) {
  let tr = tag.parentElement.parentElement;
  let name = tr.querySelector("td:first-child").textContent.replace("OLL ", "");
  let oll = ollList.find(elem => elem.id == name);

  oll.rubikCube.rotateColorScheme();

  tr.replaceChild(document.createElement("td"), tr.children[1]);
  tr.querySelector("td:nth-child(2)").innerHTML += drawSquare(oll);
  tr.replaceChild(document.createElement("td"), tr.children[2]);
  tr.querySelector("td:nth-child(3)").innerHTML += drawCube(oll);
}