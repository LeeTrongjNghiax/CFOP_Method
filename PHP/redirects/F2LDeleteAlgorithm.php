<?php
  include '../connection/connect.php';
  include '../DAO/f2l_DAO.php';

  deleteAlgorithm($conn, $_GET['id']);

  header("Location: ../webPages/F2L.php");
  exit();
?>