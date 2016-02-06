<?php
 include 'connect.php';
 $mailid="has";
 $megapoints=200;
 $sql="INSERT INTO main (tk_emailid,megapoints) VALUES ('$mailid','$megapoints')";
 $result=mysql_query($sql) or die(mysql_error());



 ?>
