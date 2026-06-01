<?php

$imageName =
$_GET['img'] ?? '';

$imagePath =
__DIR__ .
'/assets/images/' .
basename($imageName);

if (!file_exists($imagePath)) {
    die('Image not found');
}

// Clear output buffer
if (ob_get_level()) {
    ob_end_clean();
}

// Disable compression
ini_set(
    'zlib.output_compression',
    'Off'
);

// Get mime type
$finfo =
finfo_open(
    FILEINFO_MIME_TYPE
);

$mime =
finfo_file(
    $finfo,
    $imagePath
);

finfo_close(
    $finfo
);

// Force download
header(
'Content-Description: File Transfer'
);

header(
'Content-Type: ' . $mime
);

header(
'Content-Disposition: attachment; filename="' .
basename($imagePath) .
'"'
);

header(
'Content-Length: ' .
filesize($imagePath)
);

header(
'Cache-Control: must-revalidate'
);

header(
'Pragma: public'
);

flush();

readfile(
$imagePath
);

exit;