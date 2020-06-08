<?php
include('conection.php');
@$id = $_GET['id'];
@$lastname =$_GET['lastname'];
@$email =$_GET['email'];
@$password =$_GET['password'];
@$date =$_GET['date'];
@$sex =$_GET['sex'];
@$firstname =$_GET['firstname'];
@$insertData="INSERT INTO form_cteate_acc VALUES (null,'$lastname','$email','$password','$date','$sex','$firstname')";
if(mysqli_query($conn, $insertData)){
    echo "You are create new record successfully.";
}else{
    echo "Errore :".$insertData."<br/>".mysqli_error($conn);
}

?>