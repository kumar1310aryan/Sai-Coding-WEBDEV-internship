<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "student_db";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$name = $_POST['name'];
$rollno = $_POST['rollno'];
$phone = $_POST['phone'];
$class = $_POST['class'];
$section = $_POST['section'];


$checkQuery = "SELECT * FROM students WHERE rollno = ?";
$stmt = $conn->prepare($checkQuery);
$stmt->bind_param("s", $rollno);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Record already exists
    echo "<h1 align='center'>Error: A student with this Roll No already exists.</h1>";
} else {
    // Inserts the new record in the database
    $insertQuery = "INSERT INTO students (name, rollno, phone, class, section) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($insertQuery);
    $stmt->bind_param("sssss", $name, $rollno, $phone, $class, $section);

    if ($stmt->execute()) {
        echo "<h1 align='center'>New record created successfully</h1>";
    } else {
        echo "Error: " . $stmt->error;
    }
}

$stmt->close();
$conn->close();
?>
