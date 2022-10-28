<?php
  include '../connection/connect.php'
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>

  <link rel="stylesheet" href="../../CSS/general.css">

  <style>
    body {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    form {
      width: 50vh;
      border: 1px solid white;
      padding: 5vh;
      border-radius: 1vh;
    }
    label {
      font-size: 200%;
      color: #f9f9f9;
    }
    h1 {
      text-align: center;
    }
    input {
      display: block;
      width: 90%;
      padding: 1vh;
      margin: 1vh;
      border-radius: 1vh;
      background-color: black;
      color: white;
    }
    input[type=submit] {
      width: 95%;
      font-size: 150%;
      margin-top: 5vh;
      border: 1px solid white;
    }
    .error {
      background-color: red;
      color: orange;
    }
  </style>
</head>
<body>
  <form action="../redirects/loginAction.php" method="POST">
    <h1>Login</h1>
    <?php if (isset($_GET['error'])) { ?>
      <p class="error">gehsehw<?php echo $_GET['error']; ?></p>
    <?php } ?>
    <label for="inpUserName">User Name</label>
    <input type="text" name="inpUserName">

    <label for="inpPassword">Password</label>
    <input type="password" name="inpPassword">

    <input type="submit" value="Log in!">
  </form>
</body>
</html>