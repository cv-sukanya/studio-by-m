<?php

$imagePath = __DIR__ . "/assets/images/" . basename($_GET['img']);

if (!file_exists($imagePath)) {
    die("Image not found");
}

$img = imagecreatefromjpeg($imagePath);

/* Load watermark logo */
$logo = imagecreatefrompng(
    __DIR__ . "/assets/images/logo/studio-by-m1.png"
);

/* Original image dimensions */
$imgWidth = imagesx($img);
$imgHeight = imagesy($img);

/* Logo dimensions */
$logoWidth = imagesx($logo);
$logoHeight = imagesy($logo);

/* Resize logo to 25% of image width */
$newLogoWidth = $imgWidth * 0.45;
$newLogoHeight = ($logoHeight / $logoWidth) * $newLogoWidth;

/* Create resized watermark */
$resizedLogo = imagecreatetruecolor(
    $newLogoWidth,
    $newLogoHeight
);

imagealphablending($resizedLogo, false);
imagesavealpha($resizedLogo, true);

imagecopyresampled(
    $resizedLogo,
    $logo,
    0,
    0,
    0,
    0,
    $newLogoWidth,
    $newLogoHeight,
    $logoWidth,
    $logoHeight
);

/* Center position */
$x = ($imgWidth - $newLogoWidth) / 2;
$y = ($imgHeight - $newLogoHeight) / 2;

/* Merge watermark */
imagecopy(
    $img,
    $resizedLogo,
    $x,
    $y,
    0,
    0,
    $newLogoWidth,
    $newLogoHeight
);

/* Download */
header("Content-Type: image/jpeg");
header("Content-Disposition: attachment; filename=watermarked.jpg");

imagejpeg($img, null, 90);

imagedestroy($img);
imagedestroy($logo);
imagedestroy($resizedLogo);