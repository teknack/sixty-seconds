<?php
 include 'connect.php';
 $mailid="has";
 $megapoints=400;
 $sql="UPDATE main SET megapoints =400 WHERE tk_emailid='$mailid'";
 $result=mysql_query($sql) or die(mysql_error());
 ?>
