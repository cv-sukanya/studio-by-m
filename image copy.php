<?php
$image = __DIR__ . "/assets/images/" . basename($_GET['img']);

if (!file_exists($image)) {
    http_response_code(404);
    exit;
}

$mime = mime_content_type($image);

header("Content-Type: $mime");
readfile($image);