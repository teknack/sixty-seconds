<?php include 'connect.php';

$sql = "SELECT * FROM main ORDER BY megapoints DESC LIMIT 5";

$result = mysql_query($sql);

$rowCount = mysql_num_rows($result);
echo "<ul>";
while($row = mysql_fetch_object($result)){
    echo "<li>username: ".$row->tk_emailid."     score: ".$row->megapoints."</li><BR>";
}
echo "</ul>";


?>