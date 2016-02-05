<?php
include 'connect.php';
$days = $_post['point']; 
$sql = "INSERT INTO leaderboard (ID, Name, Email, Days, Score) values (1,"manish","ahsnma","$days",30)";



?>