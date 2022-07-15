createSelector = (algset, regex) => {
  let selector = `<form action="../../PHP/redirects/F2L.php" method="post">`
  let havingAlgortihm = false;

  for (let j = 0; j < algset.algorithms.length; j++) {
    let s1 = "";
    let s2 = "";
    let s3 = "";
    let tag = "";

    // if (algset.algorithms[j].status == "not learned") 
    //   tag = "not-learned";
    // else 
    //   tag = algset.algorithms[j].status;

    tag = stringToKebabCase(algset.algorithms[j].status);
    
    switch (algset.algorithms[j].status) {
      case "learning":
        s2 = `selected`;
        break;
      case "learned":
        s3 = `selected`;
        break;
      default:
        s1 = `selected`;
    }

    if (regex.test(algset.algorithms[j].algorithm)) {
      selector += ``
      if (String(regex) != String(/[^y]/)) {
        selector += `<input type="text" onresize="resizeInput(this)" readonly name="algorithm[]" value="${algset.algorithms[j].algorithm.replace(regex, "")}"></input>`
      } else {
        selector += `<input type="text" onresize="resizeInput(this)" readonly name="algorithm[]" value="${algset.algorithms[j].algorithm}"></input>`
      }
      selector += `
        <select class="${tag}" name="status[]" onchange="changeStatus(this)">
          <option value="not learned" ${s1}>Not learned</option>
          <option value="learning" ${s2}>Learning</option>
          <option value="learned" ${s3}>Learned</option>
        </select>
        <br>
      `;
      havingAlgortihm = true;
    }
  }

  if (havingAlgortihm) selector += `<button type="submit">Change</button></form>`;

  return selector;
}