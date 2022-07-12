createSelector = (algset, regex) => {
  let selector = `<div name="oll${algset.id}alg" style="background-color: black;">`

  for (let j = 0; j < algset.algorithms.length; j++) {
    if (regex.test(algset.algorithms[j].algorithm)) {
      if (String(regex) != String(/[^y]/)) {
        selector += `<div value="${algset.algorithms[j].algorithm}">${j + 1}. ${algset.algorithms[j].algorithm.replace(regex, "")}</div>`
      } else {
        selector += `<div value="${algset.algorithms[j].algorithm}">${j + 1}. ${algset.algorithms[j].algorithm}</div>`
      }
    }
  }

  selector += `</div>`;

  return selector;
}