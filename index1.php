<?php
  include_once "PHP/connect.php"
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <script src="JS/libraries/jquery-3.6.0.min.js"></script>
  <script src="JS/libraries/bootstrap.js"></script>

  <link rel="stylesheet" href="CSS/bootstrap.css">

  <style>
    body {
      background-color: black;
      color: white;
      font-family: monospace;
    }
    a {
      display: flex;
      font-size: 20vh;
    }
  </style>

</head>
<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <a href="HTML/CFOP.html">CFOP</a>
      </div>
      <div class="col-md-3">
        <a href="HTML/F2L.php">F2L</a>
      </div>
      <div class="col-md-3">
        <a href="HTML/OLL.html">OLL</a>
      </div>
      <div class="col-md-3">
        <a href="HTML/PLL.html">PLL</a>
      </div>
    </div>
  </div>

  <?php
    $sql = "SELECT f2l.id, f2la.algorithm, f2lr.faces FROM f2l INNER JOIN f2lalgorithm AS f2la ON f2l.id = f2la.id INNER JOIN f2lrubikcube as f2lr ON f2l.id = f2lr.id";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);

    if ($resultCheck > 0) {
      while ($row = mysqli_fetch_assoc($result)) {
        echo $row['id'] . " " . $row['faces'] . " " . $row['algorithm'] . "<br>";
      }
    }
  ?>
</body>
</html>