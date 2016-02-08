 

<html>
<head>
<link href="lead.css" type="text/css" rel="stylesheet">
 <script src="lead.js" type="text/javascript"> </script>

 <style type="text/css">
body{
	background-image: url("martian.jpg");
	background-repeat: no-repeat;
	background-size: 100% 100%;
 height:100%;
 width:100%;
	}
 </style>
<body onload="lead()" >
 
<div id="back">
 
<div id="nav">
<ul>1
  <li id="navul"><a id="main"  href="#home">MAIN</a></li>
  <li id="navul"><a id="one"  href="#news">#1</a></li>
  <li id="navul"><a id="two"  href="#contact">#2</a></li>
  <li id="navul"><a id="three" href="#about">#3</a></li>
  <li id="navul"><a id="four" href="#about">#4</a></li>
  <li id="navul"><a id="five" href="#about">#5</a></li>
</ul>
</div>
<div id="d_main"><?php include 'connect.php';
	$sql = "SELECT * FROM main ORDER BY megapoints DESC LIMIT 5";
$result = mysql_query($sql) or die(mysql_error());
$i=1;

echo "<center><table style='padding-top:100px;'><tr><td>Rank</td><td>Username</td><td>Mega Points</td></tr>";
while ($row = mysql_fetch_assoc($result)){
	    echo "<tr><td>".$i."</td><td>".$row['tk_emailid']."</td><td>".$row['megapoints']."</td></tr>";
    $i=$i+1;
}
echo "</table></center>";?>
</div>
<div id="d_one"><?php 
	$sql = "SELECT * FROM level1 ORDER BY tk_level_score DESC LIMIT 5";
$result = mysql_query($sql) or die(mysql_error());
$i=1;

echo "<center><table style='padding-top:100px;'><tr><td>Rank</td><td>Username</td><td>Level Score</td></tr>";
while ($row = mysql_fetch_assoc($result)){
	   echo "<tr><td>".$i."</td><td>".$row['tk_emailid']."</td><td>".$row['tk_level_score']."</td></tr>";
    $i=$i+1;
}
echo "</table>";?>
</div>
<div id="d_two">
<?php 
	$sql = "SELECT * FROM level2 ORDER BY tk_level_score DESC LIMIT 5";
$result = mysql_query($sql) or die(mysql_error());
$i=1;

echo "<center><table style='padding-top:100px;'><tr><td>Rank</td><td>Username</td><td>Level Score</td></tr>";
while ($row = mysql_fetch_assoc($result)){
	   echo "<tr><td>".$i."</td><td>".$row['tk_emailid']."</td><td>".$row['tk_level_score']."</td></tr>";
    $i=$i+1;
}
echo "</table>";?>
</div>
<div id="d_three">
<?php 
	$sql = "SELECT * FROM level3 ORDER BY tk_level_score DESC LIMIT 5";
$result = mysql_query($sql) or die(mysql_error());
$i=1;

echo "<center><table style='padding-top:100px;'><tr><td>Rank</td><td>Username</td><td>Level Score</td></tr>";
while ($row = mysql_fetch_assoc($result)){
	   echo "<tr><td>".$i."</td><td>".$row['tk_emailid']."</td><td>".$row['tk_level_score']."</td></tr>";
    $i=$i+1;
}
echo "</table>";?></div>
<div id="d_four">
<?php 
	$sql = "SELECT * FROM level4 ORDER BY tk_level_score DESC LIMIT 5";
$result = mysql_query($sql) or die(mysql_error());
$i=1;

echo "<center><table style='padding-top:100px;'><tr><td>Rank</td><td>Username</td><td>Level Score</td></tr>";
while ($row = mysql_fetch_assoc($result)){
	   echo "<tr><td>".$i."</td><td>".$row['tk_emailid']."</td><td>".$row['tk_level_score']."</td></tr>";
    $i=$i+1;
}
echo "</table>";?></div>
<div id="d_five">
<?php 
	$sql = "SELECT * FROM level5 ORDER BY tk_level_score DESC LIMIT 5";
$result = mysql_query($sql) or die(mysql_error());
$i=1;

echo "<center><table style='padding-top:100px;'><tr><td>Rank</td><td>Username</td><td>Level Score</td></tr>";
while ($row = mysql_fetch_assoc($result)){
	   echo "<tr><td>".$i."</td><td>".$row['tk_emailid']."</td><td>".$row['tk_level_score']."</td></tr>";
    $i=$i+1;
}
echo "</table>";?></div>
</div> 

</body>


</html>

?>
