<?php
include("db.php");
$conn = _connectodb();

// Assuming courseId is passed from the client-side as a GET parameter
if (isset($_GET['courseId'])) {
    $courseId = $_GET['courseId'];

    // Fetch questions for the selected course
    $sql = "SELECT * FROM form WHERE courseId = $courseId";

    $result = $conn->query($sql);

    $response = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            // Add each question to the questions array
            $response[] = $row;
        }
    }

    // Return the questions in JSON format
    echo json_encode($response);
}

$conn->close();
?>
