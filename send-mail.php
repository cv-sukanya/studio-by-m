<?php

// Basic fields
$name = $_POST['firstname'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['tel'] ?? '';
$project = $_POST['project'] ?? '';
$location = $_POST['location'] ?? '';
$stage = $_POST['project_stage'] ?? '';
$projectType = $_POST['project_type'] ?? '';
$projectTypeOther = $_POST['project_type_other'] ?? '';
$source = $_POST['source'] ?? '';
$sourceOther = $_POST['source_other'] ?? '';
$lookingFor = isset($_POST['looking_for'])
    ? implode(", ", $_POST['looking_for'])
    : '';

// Handle "Other" values
if ($projectType === "Other") {
    $projectType .= " - " . $projectTypeOther;
}

if ($source === "Other") {
    $source .= " - " . $sourceOther;
}

// --------------------
// 1. ADMIN EMAIL
// --------------------
$to = "sukanya@chronicleventures.com";
$subject = "New Project Inquiry";

$message = "
NEW PROJECT ENQUIRY

Name: $name
Email: $email
Phone: $phone

What Are They Looking For: $lookingFor

Project Location: $location
Project Type: $projectType
Project Stage: $stage
How did they hear: $source

Project Description:
$project
";

$headers = "From: sukanya@chronicleventures.com\r\n";
$headers .= "Reply-To: $email\r\n";

// Send admin email
$adminMail = mail($to, $subject, $message, $headers);


// --------------------
// 2. CLIENT AUTO REPLY
// --------------------
$clientSubject = "Thank You for Contacting Us";

$clientMessage = "
Hi $name,

Thank you for contacting us.

We’ve received your enquiry and our team will review it personally. We’ll get back to you within 5 working days.

We appreciate your interest and look forward to connecting with you.

Best Regards,  
Studio M Team
";

$clientHeaders = "From: sukanya@chronicleventures.com\r\n";
$clientHeaders .= "Reply-To: sukanya@chronicleventures.com\r\n";

// Send auto-reply email
$clientMail = mail($email, $clientSubject, $clientMessage, $clientHeaders);


// Response
if ($adminMail && $clientMail) {
    echo "success";
} else {
    echo "error";
}

?>