<?php
 include 'connect.php';
 $mailid="has";
 $megapoints=600;
  $sql="UPDATE main SET megapoints =600 WHERE tk_emailid='$mailid'";
 $result=mysql_query($sql) or die(mysql_error());
 ?>
