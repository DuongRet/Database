<?php
function table_tag( $tables ){
    $table = "<table class='table table-bordered table-hover'>";
    $table .= "<thead>";
    $table .= "<tr>";
    foreach ($tables[0] as $column => $value) {
        $table .= "<th> $column </th>";
    }
    $table .= "</tr>";
    $table .= "</thead>";
    $table .= "<tbody>";
    foreach ($tables as $column => $row) {
        $table .= "<tr>";
        foreach ($row as $column2 => $row2) {
            $table .= "<td>$row2</td>";
        }
        $table .= "</tr>";
    }
    $table .= "</tbody>";
    $table .= "</table>";
    
    return $table;
}

$getTable = [
    ["ID" => "01" , "Name" => "Mich" , "Gender" => "Male" , "Email" => "neuy.mich@gmail.com" , "Password" => "12345"] ,
    ["ID" => "02" , "Name" => "Tola" , "Gender" => "Female" , "Email" => "tola.ken@gmail.com" , "Password" => "09876"] 
];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table Using PHP Function</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
    <?=  table_tag($getTable)   ?>
</body>
</html>