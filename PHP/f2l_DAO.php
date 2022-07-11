<?php
  function getF2L($conn) {
    $rubikcubes = array();

    $sql = "SELECT f2lrubikcube.id, f2lrubikcube.face 
      FROM f2l INNER JOIN f2lrubikcube
      ON f2l.id = f2lrubikcube.id";

	  $result = $conn -> query($sql);

    if ( $result -> num_rows > 0 ) {
      while ( $row = $result -> fetch_assoc() ) {
        $rubikcubes[$row["id"] - 1] = json_decode($row["face"]);
      }
    } else {
      echo '0 result';
    }

    return $rubikcubes;
  }

  function getF2LAlgorithms($conn) {
    $resultSet = array();

    $sql = "SELECT * FROM f2l;";
    $result = $conn -> query($sql);

    $count = mysqli_num_rows($result);

    // echo $count;

    for ($i = 1; $i <= $count; $i++) { 
      $algorithms = array();

      $sql = "SELECT f2lalgorithm.algorithm 
        FROM f2l INNER JOIN f2lalgorithm
        ON f2l.id = f2lalgorithm.id
        WHERE f2lalgorithm.id = $i;";

      $result = $conn -> query($sql);
      $row = $result -> fetch_assoc();
  
      if ( $result -> num_rows > 0) {
        while ( $row = $result -> fetch_assoc() ) {
          array_push($algorithms, $row["algorithm"]);
        }
      }
      array_push($resultSet, $algorithms);
    }

    return $resultSet;
  }
?>