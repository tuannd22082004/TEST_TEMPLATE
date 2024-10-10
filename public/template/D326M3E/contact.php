<?php
$first_name = $_POST['first_name']; 
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$company_name = $_POST['company_name'];
$message = $_POST['message'];
$house = $_POST['house'];
$postcode = $_POST['postcode'];


$to = 'support-demo@gmail.com'; 

$from = 'eduac@template.com';

if($first_name && $email && $last_name && $message){
		$headers = "From:  $from \r\n";
		$headers .= "Reply-To:  $first_name<$email> \r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";
		$res = mail($to, $message, $headers);
		if($res){
		echo 'Your Message has been sent successfully!'; 
	} else {
		echo 'Something went wrong, Please Try Again.'; 
	}
} else {
	echo 'All Fields are Required.';
}