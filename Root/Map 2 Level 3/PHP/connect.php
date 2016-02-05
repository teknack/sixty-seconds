<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'sixty_seconds');
define('DB_USER','root');
define('DB_PASSWORD','');

$con=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) ;
if(!$con) die("Failed to connect to MySQL: " . mysql_error());
$db=mysql_select_db(DB_NAME,$con) or die("Failed to connect to MySQL: " . mysql_error());
?> 
<<html>
<head>
	<title></title>
</head>
<body>
<input type="text" id="xt" value ="0"></input>
</body>
</html>
<script type="text/javascript">

var point={
	pts:0,
 
 health:0,
 dayofFood:0,
 dayofFuel:0,
 dayofWater:0,
 
days_lived:0,
 
};
document.getElementById("txt").innerHtml=days_lived;
point.days_lived=318;

    $.ajax({
    type:'post',
    url:dump.php,
    data: point,
    success:function(data){
    //code to run after success
    }

    })
</script>