<?php
  include '../connection/connect.php';
  include '../DAO/f2l_DAO.php';

  $algorithm = $_POST['submitAlgorithm'];
  $id = $_POST['id'];

  addAlgorithm($conn, $algorithm, $id);
  
  header("Location: ../webPages/F2L.php");
  exit();
?>