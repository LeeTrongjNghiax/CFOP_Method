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
    $sql = 'SELECT * FROM f2l';
		$result = $conn -> query($sql);

		if ( $result -> num_rows > 0 ) {
			while ( $row = $result -> fetch_assoc() ) {
				echo "<br>";
				echo 'id: ' . $row["id"] . "<br>";
				echo 'First Name: ' . $row["firstName"] . "<br>";
				echo 'Last Name: ' . $row["lastName"] . "<br>";
				echo 'Birthday: ' . $row["birthday"] . "<br>";
				echo 'Gender: ' . $row["gender"] . "<br>";
				echo 'Email: ' . $row["email"] . "<br>";
				echo 'Phone number: ' . $row["phoneNumber"] . "<br>";
			}
		} else {
			echo '0 result';
		}
  }
?>

<script>
  let f2lList = [];

  f2lList.push(
    // new RubikCube(
    //   0, 
    //   { 
    //     u: [ [ g, g, g ], [ g, y, g ], [ g, g, g ] ],
    //     d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    //     f: [ [ g, g, g ], [ b, b, g ], [ b, b, g ] ], 
    //     b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
    //     r: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ], 
    //     l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    //   },
    //   [ 
    //     ``,
    //   ]
    // ),

    new RubikCube(
      1, 
      { 
        u: [ [ g, g, g ], [ g, y, b ], [ g, g, b ] ],
        d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
        f: [ [ g, g, w ], [ b, b, g ], [ b, b, g ] ], 
        b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
        r: [ [ r, r, g ], [ g, r, r ], [ g, r, r ] ], 
        l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
      },
      [ 
        `R' F R F'`,
        `U R U' R'`,
        `y F' L F L'`,
        `y2 U L U' L'`,
        `y' r' U' R U M'`,
      ],
      {
        u: 1, d: 0,
        f: 2, b: 0,
        r: 1, l: 0,
      },
      {
        u: 2, d: 0,
        f: 0, b: 0, 
        r: 1, l: 0,
      }
    )
  )

  for (let i = 0; i < f2lList.length; i++) {
    document.querySelector("table > tbody").innerHTML += `
      <tr>
        <td>${f2lList[i].id}</td>
        <td>${drawCube(f2lList[i])}</td>
        <td>
          <button onclick="rotateImage(this)">Rotate y</button>
          <br>
          <button onclick="rotateColorScheme(this)">Rotate Color Scheme</button>
          <br>
        </td>
        <td>${createSelector(f2lList[i], /[^y]/)}</td>
      </tr>
    `;
  }
</script>