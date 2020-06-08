<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <script src="./js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <form method="get" action="./database/insert.php">
                    <div class="form-group">
                        <label for="fname">First Name</label>
                        <input id="fname" class="form-control" type="text" name="fname">
                    </div>
                    <div class="form-group">
                        <label for="lname">Last Name</label>
                        <input id="lname" class="form-control" type="text" name="lname">
                    </div>
                    <div class="form-check form-check-inline">
                        <label for="" style="padding-right: 10px;">Gender :</label>
                        <input id="gender" class="form-check-input" type="radio" name="gender" value="Male">
                        <label for="gender" class="form-check-label">Male</label>
                        <input id="female" class="form-check-input" type="radio" name="gender" value="Female">
                        <label for="female" class="form-check-label">Female</label>
                    </div>
                    <div class="form-group">
                        <label for="date">Date of birth </label>
                        <input id="date" class="form-control" type="date" name="date">
                    </div>
                    <div class="form-group">
                        <label for="add">Present Address</label>
                        <input id="add" class="form-control" type="text" name="address">
                    </div>
                    <input type="submit" value="Save" class="btn btn-success">
                </form>
            </div>
        </div>
    </div>
</body>
</html>