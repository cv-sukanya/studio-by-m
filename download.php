<?php

$id = basename($_GET['img']);

$cloudinaryUrl =
"https://res.cloudinary.com/dgrqhkw0w/image/upload/" .
"l_studio-by-m1_d7rq7k,g_center,o_100,w_900/" .
"v1777374220/" .
$id .
".webp";

$image = file_get_contents($cloudinaryUrl);

if (!$image) {
    die("Image not found");
}

header("Content-Type: image/webp");
header("Content-Disposition: attachment; filename=".$id.".webp");

echo $image;
exit;