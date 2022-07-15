<?php
  include '../connection/connect.php';
  include '../DAO/f2l_DAO.php';

  $status = $_POST['status'];
  $algorithm = $_POST['algorithm'];

  for ($i = 0; $i < count($status); $i++) {
    changeAlgorithmStatus($conn, $algorithm[$i], $status[$i]);
  }
  
  header("Location: ../webPages/F2L.php");
  exit();
?>