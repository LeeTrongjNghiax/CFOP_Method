<?php
  include '../connection/connect.php';
  include '../DAO/f2l_DAO.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>F2L Method</title>

  <script src="../../JS/libraries/jquery-3.6.0.min.js"></script>
  <script src="../../JS/libraries/bootstrap.js"></script>

  <script src="../../JS/backendModules/drawCube.js"></script>
  <script src="../../JS/backendModules/createSelector.js"></script>
  <script src="../../JS/backendModules/globalValues.js"></script>
  <script src="../../JS/backendModules/numberToColor.js"></script>

  <script src="../../JS/frontendModules/F2L/rotateImage.js"></script>
  <script src="../../JS/frontendModules/F2L/rotateColorScheme.js"></script>
  <script src="../../JS/frontendModules/F2L/changeStatus.js"></script>
  <script src="../../JS/frontendModules/F2L/resizeInput.js"></script>
  <script src="../../JS/frontendModules/F2L/stringToKebabCase.js"></script>
  
  <link rel="stylesheet" href="../../CSS/bootstrap.css">
  <link rel="stylesheet" href="../../CSS/F2L.css">
  
</head>
<body>
  <div class="container">

    <?php
      include "header.php";
    ?>

    <div class="row">
      <div class="col-md-12">
        <h1>F2L</h1>
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

  <?php
    include 'F2LGen.php';
  ?>
</body>
</html>