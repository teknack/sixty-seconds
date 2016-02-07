<?php
 include 'connect.php';
 $mailid="has";
 $megapoints=1000;
 $sql="UPDATE main SET megapoints =1000 WHERE tk_emailid='$mailid'";
 $result=mysql_query($sql) or die(mysql_error());
 ?>
