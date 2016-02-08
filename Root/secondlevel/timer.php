<?php
include 'connect.php';

 $startTime = new DateTime("00:00:60");
$endTime = new DateTime("00:00:00");


while($startTime > $endTime) {

$startTime->modify('-1 seconds'); // can be seconds, hours.. etc

echo $startTime->format('H:i:s')."<br>";
}