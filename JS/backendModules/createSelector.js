createSelector = (rubik, regex) => {
  let selector = `<select name="oll${rubik.id}alg" style="background-color: black;">`

  for (let j = 0; j < rubik.algorithms.length; j++) {
    if (regex.test(rubik.algorithms[j])) {
      if (String(regex) != String(/[^y]/)) {
        selector += `<option value="${rubik.algorithms[j]}">${rubik.algorithms[j].replace(regex, "")}</option>`
      } else {
        selector += `<option value="${rubik.algorithms[j]}">${rubik.algorithms[j]}</option>`
      }
    }
  }

  selector += `</select>`;

  return selector;
}