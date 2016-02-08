	 <?php
include '../connect.php';
$user='manish';
$sql="SELECT * FROM level4 WHERE tk_emailid ='$user'";
$result=mysql_query($sql) or die(mysql_error());
$row=mysql_fetch_array($result);


$days_lived = $row['4'];
//session variable

$level_score = $row['4'];
$water=$row['1'];
$food=$row['2'];
$fuel=$row['3'];
$dayoffood =$row['5'];
$dayofwater =$row['6'];
$dayoffuel =$row['7'];

$sql1="SELECT * FROM main WHERE tk_emailid ='$user'";
$query1=mysql_query($sql1) or die(mysql_error());
$row2=mysql_fetch_assoc($query1);
$cl=$row2['tk_current_level'];

if($cl==0)$megapoints=100;
if($cl==1)$megapoints=100;
if($cl==2)$megapoints=200;
if($cl==3)$megapoints=350;
if($cl==4)$megapoints=600;
if($cl==5)$megapoints=1000;
$cl=2;
?>



<html>

    <head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<link type="text/css" href="main.css" rel="stylesheet"  />
		<script type="text/javascript" src="../assets/js/pageflip.js">
	</script>
	<script type="text/javascript" src="../assets/js/jquery.min.js">
	</script>
	<script type="text/javascript">
	function update(){

 $.post("../../setmegapoints.php",{username:"<?php echo $row2['tk_emailid']; ?>",level:"<?php echo $cl; ?>",megapoints:"<?php echo $megapoints; ?>"},function(){});

	}
	</script>
	</head>

	<body onload="init()">
		<div id="justtext">
		To maintain your sanity in the time spent alone in the vault. You maintained a diary and recorded the occurences.
		Go through the diary by flipping the pages or read the gist below.
		</div>
			 
			
			
		<div id="book" >
			<canvas id="pageflip-canvas"></canvas>
			<div id="pages">
				<section><div><h2>DAY ONE<hr></h2><p id="one" align="left" >Missing my bed already. Long way ahead.	 </p></div></section>
				<section><div><h2>DAY TWO<hr></h2><p id="two"align="left"> Just thinking about the condition of the world outside gives me chills  </p> </div></section>
				<section><div><h2>DAY THREE<hr> </h2><p id="three"align="left">Third day. <br> Status: Alive<br> Hopefully the coming days do not change that  </p>	 </div></section>
				<section><div><h2>DAY FOUR<hr></h2><p id="four"align="left"> Another day in the vault. Time seems to be getting slower every day now. </p></div></section>
				<section><div><h2>DAY FIVE<hr></h2><p id="five"align="left"> l </p></div></section>
				<section><div><h2>DAY SIX<hr></h2><p id="six"align="left">  </p></div></section>
				<section><div><h2>DAY SEVEN<hr> </h2><p id="seven"align="left">  </p></div></section>
				<section><div><h2>DAY EIGHT<hr></h2><p id="eight"align="left">  </p></div></section>
				<section><div><h2>DAY NINE<hr></h2><p id="nine"align="left"align="left">  </p></div></section>
				<section><div><h2>DAY TEN<hr></h2><p id="ten"align="left">  </p></div></section>
				<section><div><h2>DAY ELEVEN<hr></h2><p id="eleven"align="left">  </p></div></section>
				<section><div><h2>DAY TWELVE<hr></h2><p id="twelve"align="left">  </p></div></section>
				<section><div><h2>DAY THIRTEEN<hr></h2><p id="thirteen"align="left">  </p></div></section>
				<section><div><h2>DAY FOURTEEN<hr></h2><p id="fourteen"align="left">  </p></div></section>
				<section><div><h2>DAY FIFTEEN<hr></h2><p id="fifteen"align="left">  </p></div></section>
				<section><div><h2>DAY SIXTEEN<hr></h2><p id="sixteen"align="left">  </p></div></section>
				<section><div><h2>DAY SEVENTEEN<hr></h2><p id="seventeen"align="left">  </p></div></section>
				<section><div><h2>DAY EIGHTEEN<hr></h2><p id="eighteen"align="left">  </p></div></section>
				<section><div><h2>DAY NINETEEN<hr></h2><p id="nineteen"align="left">  </p></div></section>
				<section><div><h2>DAY TWENTY<hr></h2><p id="twenty"align="left">  </p></div></section>
				<section><div><h2>DAY TWENTY ONE</h2><p id="21"align="left">  </p></div></section>
				<section><div><h2>DAY TWENTY TWO</h2><p id="22"align="left">  </p></div></section>
				<section><div><h2>DAY TWENTY THREE</h2><p id="23"align="left">  </p></div></section>
				<section><div><h2>DAY TWENTY FOUR</h2><p id="24"align="left">  </p></div></section>
				<section><div><h2>DAY TWENTY FIVE</h2><p id="25"align="left">  </p></div></section>
				<section><div><h2>DAY TWENTY SIX</h2><p id="26"align="left">  </p></div></section>
				<section><div><h2>DAY TWENTY SEVEN</h2><p id="27"align="left">  </p></div></section>
				<section><div><h2>DAY TWENTY EIGHT</h2><p id="28"align="left">  </p></div></section>
				<section><div><h2>DAY TWENTY NINE</h2><p id="29"align="left">  </p></div></section>
				<section><div><h2>DAY THIRTY</h2><p id="30"align="left">  </p></div></section>
				<section><div><h2>DAY THIRTY ONE</h2><p id="31"align="left">  </p></div></section>
				<section><div><h2>DAY THIRTY TWO</h2><p id="32"align="left">  </p></div></section>
				<section><div><h2>DAY THIRTY THREE</h2><p id="33"align="left">  </p></div></section>
				<section><div><h2>DAY THIRTY FOUR</h2><p id="34"align="left">  </p></div></section>
				<section><div><h2>DAY THIRTY FIVE</h2><p id="35"align="left">  </p></div></section>
				<section><div><h2>DAY THIRTY SIX</h2><p id="36"align="left">  </p></div></section>
				<section><div><h2>DAY THIRTY SEVEN</h2><p id="37"align="left">  </p></div></section>
				<section><div><h2>DAY THIRTY EIGHT</h2><p id="38"align="left">  </p></div></section>
				<section><div><h2>DAY THIRTY NINE</h2><p id="39"align="left">  </p></div></section>
				<section><div><h2>DAY FORTY</h2><p   id="40"align="left"> hellloo </p></div></section>
			</div>
		</div>

		<div class="exampleoverlay">
			 
			<h2>  <font color="white" > Resources in vault </font>   </h2> <!--php use karke username lena h yaha -->
			 <font color="white" size="3px" face="Comic Sans MS"> <p> You managed to grab  
			<span id="foo"> <?php echo $food;?> </span>  Food   <span id="wat"> <?php echo $water;?> </span>  Water and <span id="fue"> <?php echo $fuel;?>  </span>  Fuel</p><br>
			 <h2>  <font color="white" > Outcome </font>   </h2>
			 
			<h4>   Food ran out on Day <span id="nofood"> <?php echo $dayoffood;?>  </span>  <br>
			<h4>   Last drops of water. Day <span id="nowater"><?php echo $dayofwater;?>  </span> <br>
			<h4>   and fuel on day  <span id="nofuel"> <?php echo $dayoffuel;?> </span>  

 
			<h3>   You survived <span id="achieved"><?php echo $days_lived;?>  </span> days  </h3> <!-- no .of days_lived-->
              
			</div>
			<div class="links">
			 <h1><a href="../../lp/lp.php"  alt="next level">Next Level</a></h1> 
			 <h1><a href="../level2.html" alt="next level">Retry</a></h1>  
			</div>
				
	
	
	</body>
<html>