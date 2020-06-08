<?php
include('conection.php');
// $firstname =$_GET['firstname'];
// $lastname =$_GET['lastname'];
// $email =$_GET['email'];
// $password =$_GET['password'];
// $confirm =$_GET['confirm'];
// $date =$_GET['date'];
// $sex =$_GET['sex'];
$insertData="INSERT INTO form_create_acc VALUES (null, 'hink', 'kanna', 'aba@gmail.com' , 'male', '333', '2020-06-11')";
mysqli_query($conn, $insertData);
// $insertData="INSERT INTO form_create_acc VALUES ('$firstname', '$lastname', '$email', '$password', '$confirm', '$male', '$female', '$day', '$month', '$year')";
// mysqli_query($conn, $insertData);
?>