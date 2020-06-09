<?php

// @$firstname =$_GET['firstname'];
// @$lastname =$_GET['lastname'];
// @$email =$_GET['email'];
// @$password =$_GET['password'];
// @$confirm =$_GET['confirm'];
// @$day =$_GET['day'];
// @$month =$_GET['month'];
// @$year =$_GET['year'];
// @$sex =$_GET['sex'];



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Exercise</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="../css/exercite.css">
</head>
<body>
    <form action="submit.php" method="GET">
        <div class="container">
            <h3> Create New Account <h3>
            <div class="row">
                <div class="col-md-12">
                    <h4> Firstname <h4>
                    <input type="text" name="id" id="id" placeholder="Enter id">
                </div>
                <div class="col-md-6">
                    <h4> Firstname <h4>
                    <input type="text" name="firstname" id="firstname" placeholder="Enter firstname">
                </div>
                <div class="col-md-6">
                    <h4> Lastname <h4>
                    <input type="text" name="lastname" id="lastname">
                </div>
                <div>
                <h4>Date</h4>
                    <input type="date" name="date" id="date">
                </div>
                <div>
                    <h4 class="nh" > Please input your Email <h4>
                    <input class="ei" type="email" name="email" id="email">
                </div>
                <div class="col-md-6">
                    <h4> input your password <h4>
                    <input  type="password" name="password" id="password">
                </div>
                <div class="col-md-6">
                    <h4> Please confirm password <h4>
                    <input type="password" name="confirm" id="confirm">
                </div><hr>
                    <h4 class="nh"> input your Brithday <h4>
               
                <div class="row">
                    <div class="col-md-6 redios">
                        <input type="radio" name="sex" id="male" value="male"> Male
                    </div>
                    <div class="col-md-6 redios">
                        <input type="radio" name="sex" value="female" id="female"> Female
                    </div>
                </div><hr>
            <input class="hiser" type="submit" value="Create New">
        </div>
    </form>
</body>
</html>