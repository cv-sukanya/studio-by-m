<?php

$to = "sukanya@chronicleventures.com";

$job = $_POST['job'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$experience = $_POST['experience'];
$messageText = $_POST['message'];

$file = $_FILES['resume'];

$filename = $file['name'];
$tmp = $file['tmp_name'];
$type = $file['type'];

$boundary = md5(time());

$headers = "From: Careers <noreply@yourdomain.com>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"";

$message = "--$boundary\r\n";
$message .= "Content-Type: text/plain\r\n\r\n";

$message .= "Job Role: $job\n";
$message .= "Name: $name\n";
$message .= "Email: $email\n";
$message .= "Phone: $phone\n";
$message .= "Experience Level: $experience\n";
$message .= "Message: $messageText\n\n";

$fileContent = chunk_split(base64_encode(file_get_contents($tmp)));

$message .= "--$boundary\r\n";
$message .= "Content-Type: $type; name=\"$filename\"\r\n";
$message .= "Content-Disposition: attachment; filename=\"$filename\"\r\n";
$message .= "Content-Transfer-Encoding: base64\r\n\r\n";
$message .= $fileContent."\r\n";
$message .= "--$boundary--";

mail($to,"New Job Application for $job",$message,$headers);

echo "Application sent successfully!";