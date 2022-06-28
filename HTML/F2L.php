<?php
  include_once "../PHP/connect.php"
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>F2L Method</title>

  <script src="../JS/libraries/jquery-3.6.0.min.js"></script>
  <script src="../JS/libraries/bootstrap.js"></script>

  <script src="../JS/backendModules/drawCube.js"></script>
  <script src="../JS/backendModules/createSelector.js"></script>
  <script src="../JS/backendModules/globalValues.js"></script>
  <script src="../JS/backendModules/numberToColor.js"></script>

  <script src="../JS/frontendModules/F2L/rotateImage.js"></script>
  <script src="../JS/frontendModules/F2L/rotateColorScheme.js"></script>
  
  <link rel="stylesheet" href="../CSS/bootstrap.css">

  <style>
    body {
      background-color: black;
      color: white;
      font-family: monospace;
      font-size: 16px;
    }

    button {
      background-color: black;
      border: 1px solid lightgreen;
    }

    select {
      background-color: black;
    }
  </style>
  
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-md-1">
        <h1>F2L</h1>
      </div>
      <div class="col-md-11">
        <div class="row">
          <div class="col-md-3">
            <label for="">Corner Position</label>
            <br>
            <select name="cornerY" id="cornerY" onchange="filterCornerY(this)">
              <option value="a">All</option>
              <option value="u">Up</option>
              <option value="d">Down</option>
            </select>
            <select name="cornerZ" id="cornerZ" onchange="filterCornerZ(this)">
              <option value="a">All</option>
              <option value="f">Front</option>
              <option value="b">Back</option>
            </select>
            <select name="cornerX" id="cornerX" onchange="filterCornerX(this)">
              <option value="a">All</option>
              <option value="r">Right</option>
              <option value="l">Left</option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="">Edge Position</label>
            <br>
            <select name="edgeY" id="edgeY" onchange="filterEdgeY(this)">
              <option value="a">All</option>
              <option value="u">Up</option>
              <option value="d">Down</option>
            </select>
            <select name="edgeZ" id="edgeZ" onchange="filterEdgeZ(this)">
              <option value="a">All</option>
              <option value="f">Front</option>
              <option value="b">Back</option>
            </select>
            <select name="edgeX" id="edgeX" onchange="filterEdgeX(this)">
              <option value="a">All</option>
              <option value="r">Right</option>
              <option value="l">Left</option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="">White Position</label>
            <br>
            <select name="whiteY" id="whiteY" onchange="filterType(this)">
              <option value="a">All</option>
              <option value="u">Up</option>
              <option value="d">Down</option>
            </select>
            <select name="whiteZ" id="whiteZ" onchange="filterType(this)">
              <option value="a">All</option>
              <option value="f">Front</option>
              <option value="b">Back</option>
            </select>
            <select name="whiteX" id="whiteX" onchange="filterType(this)">
              <option value="a">All</option>
              <option value="r">Right</option>
              <option value="l">Left</option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="">Edge Front Color Position</label>
            <br>
            <select name="edgeFrontY" id="edgeFrontY" onchange="filterType(this)">
              <option value="a">All</option>
              <option value="u">Up</option>
              <option value="d">Down</option>
            </select>
            <select name="edgeFrontZ" id="edgeFrontZ" onchange="filterType(this)">
              <option value="a">All</option>
              <option value="f">Front</option>
              <option value="b">Back</option>
            </select>
            <select name="edgeFrontX" id="edgeFrontX" onchange="filterType(this)">
              <option value="a">All</option>
              <option value="r">Right</option>
              <option value="l">Left</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image 3D</th>
              <th>Rotate</th>
              <th>Algorithm</th>
            </tr>
          </thead>
          <tbody>
          <?php
            $array = array();

            $sql = "SELECT f2l.id, f2la.algorithm, f2lr.faces FROM f2l INNER JOIN f2lalgorithm AS f2la ON f2l.id = f2la.id INNER JOIN f2lrubikcube AS f2lr ON f2l.id = f2lr.id";
            $result = mysqli_query($conn, $sql);
            $resultCheck = mysqli_num_rows($result);

            if ($resultCheck > 0) {
              while ($row = mysqli_fetch_assoc($result)) {
                array_push($array, $row['faces']);

                echo "<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['faces'] . "</td>";
                echo '<td><button onclick="rotateImage(this)">Rotate y</button><br><button onclick="rotateColorScheme(this)">Rotate Color Scheme</button><br></td>';
                echo "<td></td>";
                echo "</tr>";
              }
            }

            // <tr>
            //   <td>${f2lList[i].id}</td>
            //   <td>${drawCube(f2lList[i])}</td>
            //   <td>
            //     <button onclick="rotateImage(this)">Rotate y</button>
            //     <br>
            //     <button onclick="rotateColorScheme(this)">Rotate Color Scheme</button>
            //     <br>
            //   </td>
            //   <td>${createSelector(f2lList[i], /[^y]/)}</td>
            // </tr>
          ?>

          <script>
            console.log("<?php print_r($array) ?>");
          </script>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <script>
    function filterCornerY(tag) { 
      table = document.querySelector("table > tbody");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        id = tr[i].getElementsByTagName("td")[0].textContent.replace("OLL ", "");

        let value = tag.options[
          tag.selectedIndex
        ].value;

        if (value == "u") {
          if (f2lList[id - 1].corner.u == 0) {
            tr[i].style.display = "none";
            tr[i].setAttribute("cornerY", "true")
          } else {
            tr[i].style.display = "";
            tr[i].removeAttribute("cornerY");
          }
        } else if (value == "d") {
          if (f2lList[id - 1].corner.d == 0) {
            tr[i].style.display = "none";
            tr[i].setAttribute("cornerY", "true")
          } else {
            tr[i].style.display = "";
            tr[i].removeAttribute("cornerY");
          }
        } else {
          tr[i].style.display = "";
          tr[i].removeAttribute("cornerY");
        }
      }
    }

    function filterCornerX(tag) { 
      table = document.querySelector("table > tbody");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        id = tr[i].getElementsByTagName("td")[0].textContent.replace("OLL ", "");

        let value = tag.options[
          tag.selectedIndex
        ].value;

        if (value == "r") {
          if (f2lList[id - 1].corner.r == 0) {
            tr[i].style.display = "none";
            tr[i].setAttribute("cornerX", "true")
          } else {
            tr[i].style.display = "";
            tr[i].removeAttribute("cornerX");
          }
        } else if (value == "l") {
          if (f2lList[id - 1].corner.l == 0) {
            tr[i].style.display = "none";
            tr[i].setAttribute("cornerX", "true")
          } else {
            tr[i].style.display = "";
            tr[i].removeAttribute("cornerX");
          }
        } else {
          tr[i].style.display = "";
          tr[i].removeAttribute("cornerX");
        }
      }
    }

    // function filterCornerZ(tag) { 
    //   table = document.querySelector("table > tbody");
    //   tr = table.getElementsByTagName("tr");
    //   for (i = 0; i < tr.length; i++) {
    //     id = tr[i].getElementsByTagName("td")[0].textContent.replace("OLL ", "");

    //     let value = tag.options[
    //       tag.selectedIndex
    //     ].value;

    //     if (value == "f") {
    //       if (f2lList[id - 1].corner.f == 0) {
    //         tr[i].style.display = "none";
    //         tr[i].setAttribute("cornerZ", "true")
    //       } else {
    //         tr[i].style.display = "";
    //         tr[i].removeAttribute("cornerZ");
    //       }
    //     } else if (value == "b") {
    //       if (f2lList[id - 1].corner.b == 0) {
    //         tr[i].style.display = "none";
    //         tr[i].setAttribute("cornerZ", "true")
    //       } else {
    //         tr[i].style.display = "";
    //         tr[i].removeAttribute("cornerZ");
    //       }
    //     } else {
    //       tr[i].style.display = "";
    //       tr[i].removeAttribute("cornerZ");
    //     }
    //   }
    // }

    // function filterEdgeY(tag) { 
    //   table = document.querySelector("table > tbody");
    //   tr = table.getElementsByTagName("tr");
    //   for (i = 0; i < tr.length; i++) {
    //     id = tr[i].getElementsByTagName("td")[0].textContent.replace("OLL ", "");

    //     let value = tag.options[
    //       tag.selectedIndex
    //     ].value;

    //     if (value == "u") {
    //       if (f2lList[id - 1].edge.u == 0) {
    //         tr[i].style.display = "none";
    //         tr[i].setAttribute("edgeY", "true")
    //       } else {
    //         tr[i].style.display = "";
    //         tr[i].removeAttribute("edgeY");
    //       }
    //     } else if (value == "d") {
    //       if (f2lList[id - 1].edge.d == 0) {
    //         tr[i].style.display = "none";
    //         tr[i].setAttribute("edgeY", "true")
    //       } else {
    //         tr[i].style.display = "";
    //         tr[i].removeAttribute("edgeY");
    //       }
    //     } else {
    //       tr[i].style.display = "";
    //       tr[i].removeAttribute("edgeY");
    //     }
    //   }
    // }

    // function filterEdgeZ(tag) { 
    //   table = document.querySelector("table > tbody");
    //   tr = table.getElementsByTagName("tr");
    //   for (i = 0; i < tr.length; i++) {
    //     id = tr[i].getElementsByTagName("td")[0].textContent.replace("OLL ", "");

    //     let value = tag.options[
    //       tag.selectedIndex
    //     ].value;

    //     if (value == "f") {
    //       if (f2lList[id - 1].edge.f == 0) {
    //         tr[i].style.display = "none";
    //         tr[i].setAttribute("edgeZ", "true")
    //       } else {
    //         tr[i].style.display = "";
    //         tr[i].removeAttribute("edgeZ");
    //       }
    //     } else if (value == "b") {
    //       if (f2lList[id - 1].edge.b == 0) {
    //         tr[i].style.display = "none";
    //         tr[i].setAttribute("edgeZ", "true")
    //       } else {
    //         tr[i].style.display = "";
    //         tr[i].removeAttribute("edgeZ");
    //       }
    //     } else {
    //       tr[i].style.display = "";
    //       tr[i].removeAttribute("edgeZ");
    //     }
    //   }
    // }

    // function filterEdgeX(tag) { 
    //   table = document.querySelector("table > tbody");
    //   tr = table.getElementsByTagName("tr");
    //   for (i = 0; i < tr.length; i++) {
    //     id = tr[i].getElementsByTagName("td")[0].textContent.replace("OLL ", "");

    //     let value = tag.options[
    //       tag.selectedIndex
    //     ].value;

    //     if (value == "r") {
    //       if (f2lList[id - 1].edge.r == 0) {
    //         tr[i].style.display = "none";
    //         tr[i].setAttribute("edgeX", "true")
    //       } else {
    //         tr[i].style.display = "";
    //         tr[i].removeAttribute("edgeX");
    //       }
    //     } else if (value == "l") {
    //       if (f2lList[id - 1].edge.l == 0) {
    //         tr[i].style.display = "none";
    //         tr[i].setAttribute("edgeX", "true")
    //       } else {
    //         tr[i].style.display = "";
    //         tr[i].removeAttribute("edgeX");
    //       }
    //     } else {
    //       tr[i].style.display = "";
    //       tr[i].removeAttribute("edgeX");
    //     }
    //   }
    // }
  </script>

    <!-- function rotateColorScheme(tag) {
      let tr = tag.parentElement.parentElement;
      let name = tr.querySelector("td:first-child").textContent;
      let f2l = f2lList.find(elem => elem.id == name);

      f2l.rotateColorScheme();

      tr.replaceChild(document.createElement("td"), tr.children[1]);
      tr.querySelector("td:nth-child(2)").innerHTML += drawCube(f2l);
    }

    function rotateImage(tag) {
      let tr = tag.parentElement.parentElement;
      let id = tr.querySelector("td:first-child").textContent.replace("OLL ", "");

      if (/y$/.test(tag.textContent)) {
        f2lList[id - 1].y();
      } else if (/y'$/.test(tag.textContent)) {
        f2lList[id - 1].yPrime();
      }

      tr.replaceChild(document.createElement("td"), tr.children[1]);
      tr.querySelector("td:nth-child(2)").innerHTML += drawCube(f2lList[id - 1]);

      let regex;
      switch (Math.abs(f2lList[id - 1].rotateCount) % 4) {
        case 1:
          regex = /^y /;
          break;
        case 2:
          regex = /^y2 /;
          break;
        case 3:
          regex = /^y' /;
          break;
        default:
          regex = /[^y]/;
      }
      let selector = createSelector(f2lList[id - 1], regex);
      tr.replaceChild(document.createElement("td"), tr.children[3]);
      tr.querySelector("td:nth-child(4)").innerHTML += selector;
    }
  </script> -->
  <!-- <script src="../JS/dataGenerators/F2LGen.js"></script> -->
</body>
</html>