<?php
 include 'connect.php';
 $mailid="has";
 $sql="INSERT INTO main (tk_emailid,megapoints) VALUES ('$mailid','100')";
 $result=mysql_query($sql) or die(mysql_error());
 ?>
