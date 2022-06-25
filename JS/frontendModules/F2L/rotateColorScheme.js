function rotateColorScheme(tag) {
  let tr = tag.parentElement.parentElement;
  let name = tr.querySelector("td:first-child").textContent.replace("OLL ", "");
  let f2l = f2lList.find(elem => elem.id == name);

  f2l.rotateColorScheme();

  tr.replaceChild(document.createElement("td"), tr.children[1]);
  tr.querySelector("td:nth-child(2)").innerHTML += drawCube(f2l);
}