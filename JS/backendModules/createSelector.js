createSelector = (algset, regex) => {
  let selector = `
  <form action="../../PHP/redirects/F2LSubmitAlgorithm.php" method="post">
    <input name="id" type="hidden" value="${algset.id}">
    <input name="submitAlgorithm" pattern="^[UDFBRLMESudfbrlxyz](2|')?( [UDFBRLMESudfbrlxyz](2|')?)+$">
    <button type="submit">Submit Algorithm!</button>
  </form>
  `
  selector += `<form action="../../PHP/redirects/F2L.php" method="post">`
  let havingAlgortihm = false;

  for (let j = 0; j < algset.algorithms.length; j++) {
    let s1 = "";
    let s2 = "";
    let s3 = "";
    let tag = "";

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
        <a class="delete-btn" href="../../PHP/redirects/F2LDeleteAlgorithm.php?id=${algset.algorithms[j].algorithm}" onclick="return confirm('Are you sure to delete the record?')">Delete</a>
        <br>
      `;
      havingAlgortihm = true;
    }
  }

  if (havingAlgortihm) selector += `<button type="submit">Change Status</button></form>`;

  return selector;
}