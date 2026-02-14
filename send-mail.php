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

// Checkbox array
$lookingFor = isset($_POST['looking_for']) ? implode(", ", $_POST['looking_for']) : '';

// Handle "Other" values
if ($projectType === "Other") {
  $projectType .= " - " . $projectTypeOther;
}

if ($source === "Other") {
  $source .= " - " . $sourceOther;
}

// Email config
$to = "sukanya@chronicleventures.com";
$subject = "New Project Inquiry";

$message = "
NEW PROJECT ENQUIRY

Name: $name
Email: $email
Phone: $phone

Project Location: $location
Project Type: $projectType
Looking For: $lookingFor
Project Stage: $stage
How did they hear: $source

Project Description:
$project
";

$headers = "From: $email\r\nReply-To: $email";

mail($to, $subject, $message, $headers);

echo "success";
?>
