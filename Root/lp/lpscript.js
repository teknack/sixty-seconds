 
function unlock(level) { 
	
var five = document.getElementById('overfive');
var four = document.getElementById('overfour');
var three = document.getElementById('overthree');	
var two = document.getElementById('overtwo');
var one = document.getElementById('overone');

var gundfive = document.getElementById('linkfive');
var gundfour = document.getElementById('linkfour');
var gundthree = document.getElementById('linkthree');	
var gundtwo = document.getElementById('linktwo');
var gundone = document.getElementById('linkone');

  switch(level) 
{
	case 5: {	gundfive.style.display='block';
				gundfive.style.cursor='pointer';
				five.style.display ='none';
				}

	case 4: {	gundfour.style.display='block';
				gundfour.style.cursor='pointer';
				four.style.display ='none';
				}


	case 3: {	gundthree.style.display='block';
				gundthree.style.cursor='pointer';  
				three.style.display ='none';
				}

	case 2: {	gundtwo.style.display='block';
				gundtwo.style.cursor='pointer';
				two.style.display ='none';
				}

	case 1: {	gundone.style.display='block';
				gundone.style.cursor='pointer';
				one.style.display = 'none';
				}	
				break;



} <!--switch-->


}