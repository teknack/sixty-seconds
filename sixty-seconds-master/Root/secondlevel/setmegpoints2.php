<?php
 include 'connect.php';
 $mailid="has";
 $sql="UPDATE main SET megapoints =225 WHERE tk_emailid='$mailid'";
 $result=mysql_query($sql) or die(mysql_error());
 ?>
