<?php
include("db.php");
$conn = _connectodb();

$response = array();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $Name = $_POST['name'];
    $Email = $_POST['email'];
    $Question = $_POST['question'];
    $courseId = $_POST['courseId'];


    $sql = "INSERT INTO form (Name, Email, Question, courseId) VALUES('$Name', '$Email', '$Question', '$courseId')";
    $response = _InsertTableRecords($conn, $sql);
    
    
} else {
    $response['error'] = true;
    $response['message'] = "No data sent.";
}
print_r($_POST);
echo json_encode($response);
?>