<?php
$conn = new mysqli('localhost', 'root', '', 'pweb');
$user=$_POST['user'];
$pass=password_hash($_POST['pass'], PASSWORD_DEFAULT);
$email=$_POST['email'];
$fname=$_POST['fname'];
$lname=$_POST['lname'];
$birth=$_POST['birth'];
$sql="INSERT INTO `test` (`ID`,`user`,`email`,`pass`,`fname`,`lname`,`birth`) 
VALUES (null,'$user','$email','$pass','$fname','$lname','$birth')";

$queryname = mysqli_query($conn,"SELECT * FROM test WHERE user='$user'");
$queryemail = mysqli_query($conn,"SELECT * FROM test WHERE email='$email'");

if(mysqli_num_rows($queryname) > 0) 
{
	echo "The username: " . $_POST['user'] .", already exists.";
}
elseif(mysqli_num_rows($queryemail)>0)
{
	echo "The email: " . $_POST['email'] .", is already used.";
}
else
{
	if ($conn->query($sql) === TRUE) 
	{
    	echo "Data inserted";
	}
	else 
	{	
    	echo "Failed";
	}
}


?>