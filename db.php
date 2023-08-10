<?php
$servername = "localhost";
$dbusername = "root";
$password = "";
$dbname = "assignment";
function _connectodb()
{
	global $dbname;
	global $servername;
	global $dbusername;
	global $password;
	$connect = new mysqli($servername,$dbusername,$password,$dbname);
	if($connect->connect_error)
	{
		print_r("Connection Error: " . $connect->connect_error);
		return false;
	}
	else
	{
		return $connect;
	}
}
function _InsertTableRecords($conn, $sql)
{
	$response = array();
	$result = mysqli_query($conn, $sql);
	echo "$result";
	if ($result) {
		$response['message'] = "Data Inserted";
		$response['error'] = false;
		$lastId = mysqli_insert_id($conn);
		$response['last_insert_id'] = $lastId;
	} else {
		$response['sql'] = $sql;
		$response['error'] = true;
		$error = mysqli_error($conn);
		$response['message'] = $error;
		echo $sql;
		echo $error;
	}
	return $response;
}

  
?>