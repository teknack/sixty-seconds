<?php include 'connect.php';
$qry=mysql_query("SELECT * FROM level1 ORDER BY DESC LIMIT 5");
$result=array();
while($row = mysql_fetch_array($qry))
array_push($result,array('username' => $row[0],
                      'levelscore' => $row[6]));     

echo json_encode(array("result" => $result));

    
?>
function updates(){




$.(document).ready(function(){
	
$.getJSON("fetch.php",function(data){;
$("ul").empty()	

$.each(data.result,function(){
	$("ul").append("<li>Name: "+this['username']+"</li><li>Score: "+this['levelscore'] };


});



});

});
}





$.document.ready({
	setTimeout(function{
updates();
});  

});