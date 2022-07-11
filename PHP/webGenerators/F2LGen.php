<script>
  let f2lList = <?php echo json_encode(getF2L($conn)) ?>;
  let f2lalgorithms = <?php echo json_encode(getF2LAlgorithms($conn)) ?>;

  for (let i = 0; i < f2lList.length; i++) {
    let algorithmsList = [];
    for (let j = 0; j < f2lalgorithms[i].length; j++) {
      algorithmsList.push(new Algorithm(f2lalgorithms[i][j]));
    }
    f2lList[i] = new F2L(
      i + 1,
      new RubikCube(f2lList[i]),
      algorithmsList
    );
  }
  
  for (let i = 0; i < f2lList.length; i++) {
    document.querySelector("table > tbody").innerHTML += `
      <tr>
        <td>${f2lList[i].id}</td>
        <td>${drawCube(f2lList[i])}</td>
        <td>
          <button onclick="rotateImage(this)">Rotate y</button>
          <br>
          <button onclick="rotateColorScheme(this)">Rotate Color Scheme</button>
          <br>
        </td>
        <td>${createSelector(f2lList[i], /[^y]/)}</td>
      </tr>
    `;
  }
</script>