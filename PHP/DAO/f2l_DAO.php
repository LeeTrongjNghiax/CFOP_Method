<?php
  class Algorithm implements JsonSerializable {
    private $algorithm;
    private $status;

    function __construct($algorithm, $status) {
      $this->algorithm = $algorithm;
      $this->status = $status;
    }

    public function get_algorithm() {
      return $this -> algorithm;
    }

    public function get_status() {
      return $this -> status;
    }

    public function jsonSerialize() {
      return [
        'algorithm' => $this->algorithm,
        'status' => $this->status
      ];
    }
  }

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

    for ($i = 1; $i <= $count; $i++) { 
      $algorithms = array();

      $sql = "SELECT f2lalgorithm.algorithm, f2lalgorithm.status
        FROM f2l INNER JOIN f2lalgorithm
        ON f2l.id = f2lalgorithm.id
        WHERE f2lalgorithm.id = $i;";

      $result = $conn -> query($sql);
  
      if ( $result -> num_rows > 0) {
        while ( $row = $result -> fetch_assoc() ) {
          array_push($algorithms, new Algorithm($row["algorithm"], $row["status"]) );
        }
      }
      
      array_push($resultSet, $algorithms);
    }
    return $resultSet;
  }

  function getF2LAlgorithm($conn, $id) {
    $algorithms = array();

    $sql = "SELECT f2lalgorithm.algorithm, f2lalgorithm.status
      FROM f2l INNER JOIN f2lalgorithm
      ON f2l.id = f2lalgorithm.id
      WHERE f2lalgorithm.id = $id;";

    $result = $conn -> query($sql);

    if ( $result -> num_rows > 0) {
      while ( $row = $result -> fetch_assoc() ) {
        array_push($algorithms, new Algorithm($row["algorithm"], $row["status"]) );
      }
      return $algorithms;
    }
    return null;
  }

  function changeAlgorithmStatus($conn, $algorithm, $status) {
    $sql = "UPDATE f2lalgorithm
      SET
        f2lalgorithm.status = " . json_encode($status) . "
      WHERE f2lalgorithm.algorithm = " . json_encode($algorithm) . "";

    $result = $conn -> query($sql);
    return $result;
  }

  function addAlgorithm($conn, $algorithm, $id) {
    $sql = "INSERT INTO f2lalgorithm VALUE (" . json_encode($algorithm) . ", " . $id . ", " . json_encode("not learned") . ")";

    $result = $conn -> query($sql);
    return $result;
  }

  function deleteAlgorithm($conn, $algorithm) {
    $sql = "DELETE FROM f2lalgorithm WHERE algorithm = " . json_encode($algorithm);

    $result = $conn -> query($sql);
    return $result;
  }
?>