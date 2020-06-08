<?php
include('connection.php');
$fname = $_GET["fname"];
$lname = $_GET["lname"];
$gender = $_GET["gender"];
$date = $_GET["date"];
$address = $_GET["address"];
$query = "INSERT INTO tbl_list VALUES(null , '$fname' , ' $lname' , '$gender' , '$date' , '$address')";
mysqli_query($conn,$query);
echo "<meta http-equiv='refresh' content=' 0; url=http://localhost/project1/form-date/index.php' >";
?>