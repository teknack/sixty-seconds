function lead()
    {
		
        document.getElementById("main").addEventListener( 'click' , mainx );
        document.getElementById("one").addEventListener( 'click' , one );
        document.getElementById("two").addEventListener( 'click' , two );
        document.getElementById('three').addEventListener( 'click' , three );
        document.getElementById('four').addEventListener( 'click' , four );
        document.getElementById('five').addEventListener( 'click' , five );
   

function mainx() { 
	document.getElementById("d_main").style.visibility="visible";
	document.getElementById("d_one").style.visibility="hidden";
	document.getElementById("d_two").style.visibility="hidden";
	document.getElementById("d_three").style.visibility="hidden";
	document.getElementById("d_four").style.visibility="hidden";
	document.getElementById("d_five").style.visibility="hidden";


 }
function one() { 
document.getElementById("d_main").style.visibility="hidden";
	document.getElementById("d_one").style.visibility="visible";
	document.getElementById("d_two").style.visibility="hidden";
	document.getElementById("d_three").style.visibility="hidden";
	document.getElementById("d_four").style.visibility="hidden";
	document.getElementById("d_five").style.visibility="hidden";
 }
function two() { 
document.getElementById("d_main").style.visibility="hidden";
	document.getElementById("d_one").style.visibility="hidden";
	document.getElementById("d_two").style.visibility="visible";
	document.getElementById("d_three").style.visibility="hidden";
	document.getElementById("d_four").style.visibility="hidden";
	document.getElementById("d_five").style.visibility="hidden";
 }
function three() { 
document.getElementById("d_main").style.visibility="hidden";
	document.getElementById("d_one").style.visibility="hidden";
	document.getElementById("d_two").style.visibility="hidden";
	document.getElementById("d_three").style.visibility="visible";
	document.getElementById("d_four").style.visibility="hidden";
	document.getElementById("d_five").style.visibility="hidden";
 }

function four() { 
document.getElementById("d_main").style.visibility="hidden";
	document.getElementById("d_one").style.visibility="hidden";
	document.getElementById("d_two").style.visibility="hidden";
	document.getElementById("d_three").style.visibility="hidden";
	document.getElementById("d_four").style.visibility="visible";
	document.getElementById("d_five").style.visibility="hidden";

 }
function five() { 

document.getElementById("d_main").style.visibility="hidden";
	document.getElementById("d_one").style.visibility="hidden";
	document.getElementById("d_two").style.visibility="hidden";
	document.getElementById("d_three").style.visibility="hidden";
	document.getElementById("d_four").style.visibility="hidden";
	document.getElementById("d_five").style.visibility="visible";
 }
  }