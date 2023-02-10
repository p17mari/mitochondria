<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="basic.css" />
    <title>Mitochondria</title>
</head>
<body>
    <div class="topnav">
        <a class="active" href="index.html">Home</a>
        <a href="news">Services</a>
        <a href="contact">Info</a>
        <a href="form.html">Appointment</a>
        <input type="text" placeholder="Search.." />
    </div>
    <h1>changes implemented</h1>

    <?php
    $dbServername = "localhost";
    $dbUsername = "root";
    $dbPassword= "";
    $dbName= "form";

    $conn = mysqli_connect($dbServername,$dbUsername,$dbPassword,$dbName);

    $fullname = $_POST['fullname'];
    $maidename = $_POST['maidename'];
    $age = $_POST['age'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $afm = $_POST['afm'];
    $amka = $_POST['amka'];
    $credit = $_POST['credit'];
    $expiration = date('Y-m-d', strtotime($_POST['expiration']));
    $address = $_POST['address'];
    $comment = $_POST['comment'];

    $sql = "INSERT INTO form (fullname, maidename, age, phone, email, afm, amka, credit, expiration, address, comment) VALUES ('$fullname', '$maidename', '$age', '$phone', '$email', '$afm', '$amka', '$credit', '$expiration', '$address', '$comment');";
    mysqli_query($conn, $sql);

    ?>
    
    <input type="button" onclick="window.location.href='form.html';" value="Return to form" />
        

</body>


</html>