createSelector = (algset, regex) => {
  console.log(algset);

  let selector = `<select name="oll${algset.id}alg" style="background-color: black;">`

  for (let j = 0; j < algset.algorithms.length; j++) {
    if (regex.test(algset.algorithms[j].algorithm)) {
      if (String(regex) != String(/[^y]/)) {
        selector += `<option value="${algset.algorithms[j].algorithm}">${algset.algorithms[j].algorithm.replace(regex, "")}</option>`
      } else {
        selector += `<option value="${algset.algorithms[j].algorithm}">${algset.algorithms[j].algorithm}</option>`
      }
    }
  }

  selector += `</select>`;

  return selector;
}