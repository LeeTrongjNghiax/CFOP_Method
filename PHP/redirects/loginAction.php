<?php
  function validate($data) {
    $data = trim(($data));
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

  if (isset($_POST['inpUserName']) && isset($_POST['inpPassword'])) {
    $userName = validate($_POST['inpUserName']);
    $password = validate($_POST['inpPassword']);

    if (empty($userName)) {
      header("Location: ../webPages/login.php?error = User Name is required");
      exit();  
    } else if (empty($password)) {
      header("Location: ../webPages/login.php?error = Password is required");
      exit();  
    } else {
      echo "ok";
    }
  } else {
    header("Location: ../webPages/login.php");
    exit();
  }
?>