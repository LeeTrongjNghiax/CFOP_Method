<?php
  include '../connection/connect.php';
  include '../DAO/f2l_DAO.php';

  addAlgorithm($conn, $_POST['submitAlgorithm'], $_POST['id']);
  
  header("Location: ../webPages/F2L.php");
  exit();
?>