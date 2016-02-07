<?php

 include 'connect.php';
 $currenttime=date("H:m:s");
$T = strtotime("00:00:00");
$countdown = $T - strtotime($currenttime);
echo $T;
echo "current=".$currenttime;
echo "difft=".$countdown;


$days = floor($countdown / (60 * 60 * 24));
$remainder = $countdown% (60 * 60 * 24);
$hours = floor($remainder / (60 * 60));
$remainder = $remainder % (60 * 60);
$minutes = floor($remainder / 60);
$seconds = $remainder % 60;
echo $minutes.$seconds;
?> 