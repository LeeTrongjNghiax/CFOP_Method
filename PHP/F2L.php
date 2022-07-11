<?php
  include 'connect.php';
  include 'Modules/debugToConsole.php';
  include 'f2l_DAO.php';
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
  </script>

  <?php
    include 'webGenerators/F2LGen.php';
  ?>
</body>
</html>