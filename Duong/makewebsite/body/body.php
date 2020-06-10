<?php 
$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "studentlist";
$conn = mysqli_connect($hostname, $username, $password, $dbname);
// $query = "SELECT * FROM studentlist";
// $data = mysqli_query($conn,$query);

@$name =$_GET['name'];
@$sex =$_GET['sex'];
@$date =$_GET['date'];
@$class =$_GET['class'];
if($name != "" && $sex != "" && $date != "" && $class !=""){
  $insertData = "INSERT INTO studentlist VALUES (null,'$name','$sex','$date','$class')";
  mysqli_query($conn,$insertData);
  echo "<meta http-equiv='refresh' content=' 0; url=http://localhost/Database/Duong/makewebsite/body/body.php'/>";
}
$query ="SELECT * FROM studentlist";
$data = mysqli_query($conn,$query);
$tatal = mysqli_num_rows($data)

?>
<!DOCTYPE html>
<html>
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link href="css/custom.css" rel="stylesheet">
  <link rel="stylesheet" href="../css/stylebody.css">
</head>
<body>
  
<div class="container-fluid">
    <div style="background-color: lightyellow;" id="header1"> 
   <h1 class="text-center">&nbsp;School</h1>
   </div>

<nav class="navbar" width="100%" data-spy="affix" data-offset-top="1">
  <ul class="nav nav-tabs">
    <li><a class="active" data-toggle="pill" href="#">Videos</a></li>
    <li><a data-toggle="pill" href="#">Student List</a></li>
    <li><a data-toggle="pill" href="#">Teacher List</a></li>
    <li><a data-toggle="pill" href="#">Book list</a></li>
    <li><a data-toggle="pill" href="#">Calender</a></li>
    <li><a data-toggle="pill" href="#">Schedule for Student</a></li>
    <li><a data-toggle="pill" href="#">Schedule for Teacher</a></li>
    <li><a data-toggle="pill" href="#">Form new student</a></li>
    <li><a data-toggle="pill" href="#">Traveling</a></li>
    <li><a data-toggle="pill" href="#">Traveling</a></li>
    <li><a data-toggle="pill" href="#">Traveling</a></li>
    <li><a data-toggle="pill" href="#">Traveling</a></li>
    <li><a data-toggle="pill" href="#">Traveling</a></li>
  </ul>
</nav>
<div>
<form action="<?= $_SERVER['PHP_SELF'] ?>" method="get" autocomplete="off">
<input class="btn btn-success" id="save" type="submit" value="Save" >
  <table class="table" border="1">
    <thead>
      <tr>
        <th>N<sup>o</sup></th>
        <th>Name</th>
        <th>Sex</th>
        <th>Date of birth</th>
        <th>Class</th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <?php if($tatal == ""){ ?>
          <td><input type="text" value="0" id="name" disabled></td>
        <?php }else{ ?>
        <td><input type="text" value="<?= $tatal + 1 ?>" id="name" disabled style="text-align: center;color:red;font-weight:bold;"></td>
        <?php }?>
        <td><input type="text" name="name" id="name" ></td>
        <td><input type="text" name="sex" id="name" ></td>
        <td><input type="date" name="date" id="name" ></td>
        <td><input type="text" name="class" id="name"></td>
      </tr>
    </tbody> 
    <!-- <input class="btn btn-success" id="save" type="submit" value="Save" > -->
  </form>
  </table>
  <table class="table" border="1">
    <thead>
      <tr>
        <th>N<sup>o</sup></th>
        <th>Name</th>
        <th>Sex</th>
        <th>Date of birth</th>
        <th>Class</th>
      </tr>
    </thead>
    <tbody>
    <?php 
     while($result = mysqli_fetch_assoc($data)) {
    ?>
      <tr>
       <td><?= @$result['id']?></td>
       <td><?= @$result['name']?></td>
       <td><?= @$result['sex']?></td>
       <td><?= @$result['date']?></td>
       <td><?= @$result['class']?></td>
      </tr>
      <?php } ?>
    </tbody>
  </table>



  
</div>
</div>

</body>
</html>