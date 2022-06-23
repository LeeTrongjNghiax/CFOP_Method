<?php
	$hostName = 'localhost';
	$username = 'LeeTrongjNghiax';
	$password = 'Ngh1@x0938225745';
	$dbs = 'cfop';

	$conn = mysqli_connect($hostName, $username, $password, $dbs);

	if ($conn -> connect_error) {
		echo "$conn -> connect_error";
		die("Connection Failed: ". $conn -> connect_error);
	} else {
		// $stmt = $conn -> prepare("INSERT INTO person(firstName, lastName, birthday, gender, email, phoneNumber) VALUES(?, ?, ?, ?, ?, ?)");
		// $stmt -> bind_param("sssssi", $firstName, $lastName, $birthday, $gender, $email, $phoneNumber);
		// $execval = $stmt -> execute();
		echo "Registration successfully!" . "<br>";
		$stmt -> close();

		// $sql = 'SELECT * FROM person';
		// $result = $conn -> query($sql);

		// if ( $result -> num_rows > 0 ) {
		// 	while ( $row = $result -> fetch_assoc() ) {
		// 		echo "<br>";
		// 		echo 'id: ' . $row["id"] . "<br>";
		// 		echo 'First Name: ' . $row["firstName"] . "<br>";
		// 		echo 'Last Name: ' . $row["lastName"] . "<br>";
		// 		echo 'Birthday: ' . $row["birthday"] . "<br>";
		// 		echo 'Gender: ' . $row["gender"] . "<br>";
		// 		echo 'Email: ' . $row["email"] . "<br>";
		// 		echo 'Phone number: ' . $row["phoneNumber"] . "<br>";
		// 	}
		// } else {
		// 	echo '0 result';
		// }
		
		$conn -> close();
	}
?>

<a href="/">HOME</a>