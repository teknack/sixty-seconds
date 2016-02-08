<?php
include 'connect.php';
$user='has';
$sql="SELECT * FROM main WHERE tk_emailid ='$user'";
$query=mysql_query($sql) or die(mysql_error());
$row=mysql_fetch_assoc($query);
$cl=$row['tk_current_level'];

?>
<html>
<head>
<link href=lpstyle.css type=text/css rel=stylesheet>
  <script src="lpscript.js"></script>
 <script src="../level1/assets/js/jquery.min.js"></script> 

</head>

<body> 
	
<div id="one"></div> <div id="two"></div> <div id="three"></div>

<div id="overone"> </div> 

	<div id="gundone"> <a id="linkone" href="../level1/Rules/Rules.html"> </a>  </div>

<div id="overtwo">
 </div> 

 <div id="gundtwo"> <a id="linktwo" href="../secondlevel/Rules/Rules.html"> </a> </div>


 
<div id="overthree">  
  </div>

   <div id="gundthree">   <a id="linkthree" href="../Map 2 Level 3/Rules/Rules.html"  >  </a> </div>


 
<div id="overfour">  
 </div> 

 <div id="gundfour">
  <a id="linkfour" href="../penultimatelevel4/Rules/Rules.html"  >  </a> </div>
 

<div id="overfive">  
  </div> 

 <div id="gundfive">
  <a id="linkfive" href="../ultimatelevel5/Rules/Rules.html"  > </a> </div>
<div id="leadlink"> <a href="../leader/lead.php" alt="Contact Akash Gund" > <b>Survivors</b> </a> </div>

</body>

<script type="text/javascript">
var level=<?php echo $cl;?>;
unlock(level);
</script>
</html>
