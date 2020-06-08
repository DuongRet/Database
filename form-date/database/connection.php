<?php
$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "testingdate";
    $conn = mysqli_connect( $hostname , $username , $password , $dbname);
    mysqli_query($conn,"SET NAMES utf8");
?>