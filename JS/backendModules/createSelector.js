createSelector = (rubik, regex) => {
  let selector = `<div name="oll${rubik.id}alg" style="background-color: black;">`

  for (let j = 0; j < rubik.algorithms.length; j++) {
    if (regex.test(rubik.algorithms[j])) {
      if (String(regex) != String(/[^y]/)) {
        selector += `<div value="${rubik.algorithms[j]}">${j + 1}. ${rubik.algorithms[j].replace(regex, "")}</div>`
      } else {
        selector += `<div value="${rubik.algorithms[j]}">${j + 1}. ${rubik.algorithms[j]}</div>`
      }
    }
  }

  selector += `</div>`;

  return selector;
}