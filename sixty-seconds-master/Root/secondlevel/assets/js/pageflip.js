
  function ajax_post(days_lived,waters,foods,fuels,dayofFuel,dayofFood,dayofWater){
 $.post("dump.php",{no_of_days_lived:days_lived,water:waters,food:foods,fuel:fuels,day_of_no_food:dayofFood,day_of_no_water:dayofWater,day_of_no_fuel:dayofFuel},function(){});
return 0;
}


var point={
	
 total_fuel:null,
total_food:null,
total_water:null,
 health:100,
 dayofFood:0,
 dayofFuel:0,
 dayofWater:0,
 waters:0,
 foods:0,
 fuels:0,
days_lived:0,
 
};
var first_aid=false;
var spcl=0;
var foodini=null;
var fuelini=null;
var waterini=null;
var o=null;
var torch=0;
function calculate(resources){
	for(var i=0;i<resources.length;i++)
if(resources[i]==oxy)
 o=i;
	if(o!=null){ 
		for(var i=0;i<resources.length;i++){

				if(resources[i]== wat)
				{point.total_water++;}
			    if(resources[i] == fue)
				{point.total_fuel++;}
			    if(resources[i] == foo)
				{point.total_food++;}
                if(resources[i] == oxy)
				torch=1;
          
				}
				
				point.waters=point.total_water;
				point.fuels=point.total_fuel;
				point.foods=point.total_food;

                 if(point.total_water == 5 ) spcl++;
                  if(point.total_fuel == 4 ) spcl++;
                  if(point.total_food == 4 ) spcl++;
                  if(torch) spcl++;

						for(var i=1;point.health>0 ;i++,point.days_lived++)
						{ 
						if(point.total_water >0 && point.total_food > 0  && point.total_fuel > 0)    
						   { 
						   	point.total_water-=0.25;
						    point.total_fuel-= 0.20;
						    point.total_food-=0.1;
	
						   }
						else if(point.total_water > 0 && point.total_food > 0 && point.total_fuel <=0)    
						   {
						   	point.total_water-=0.25;
						   point.health-=10;
						    point.total_food-=0.1;
						   } 
						else if(point.total_water > 0 && point.total_food <= 0 && point.total_fuel > 0)    
						   {
						   	point.total_water-=0.25;
						   point.health-=20;
						   } 
						else if(point.total_water > 0 && point.total_food <= 0 && point.total_fuel <= 0)    
						   {
						   	point.total_water-=0.25;
						   point.health-=20;
						   } 
						else if(point.total_water <=0 && point.total_food > 0 && point.total_fuel > 0)    
						   {
						   point.total_food-=0.1;
						   point.total_fuel-=0.20;						   point.health-=10;
						   } 
						else if(point.total_water <= 0 && point.total_food > 0 && point.total_fuel <=0)    
						   { point.total_food-=0.1;
						   point.health-=10;
						   } 
						else if(point.total_water <=0 && point.total_food <= 0 && point.total_fuel > 0)    
						   {
						   	point.health-=30;
						   } 
						else if(point.total_water <=0 && point.total_food <= 0 && point.total_fuel <= 0)    
						   {
						   	point.health -=30;
						   } 
                        if(foodini== null)
                         if(point.total_food<=0) {foodini= 1; point.dayofFood= i;  }
						
						if(waterini == null)
                         if(point.total_water<=0) {waterini= 1; point.dayofWater= i;  }
						if(fuelini == null)
                         if(point.total_fuel<=0) {fuelini= 1; point.dayofFuel= i;  }

						if(point.health == 0 && first_aid)
							point.health+=20;
}// for ends
						
                       switch(spcl)
                    {

                       case 1:point.days_lived+=2;
                       case 2:point.days_lived+=5;
                       case 3:point.days_lived+=8;
                       case 4:point.days_lived+=10;
                    }
                  
			
  
var a=new Array();
  a[0]=point.days_lived;
  a[1]=point.waters;
  a[2]=point.foods;
  a[3]=point.fuels;
  a[4]=point.dayofFood;
  a[5]=point.dayofFuel;
  a[6]=point.dayofWater;
  ajax_post(a[0],a[1],a[2],a[3],a[4],a[5],a[6]);
 alert("we need apop up here");
}//if oxygen



}//calculate ends
function init(){ //this is for demo.html
	(function() {
	
	// Dimensions of the whole book
	var BOOK_WIDTH = 400;
	 //var BOOK_WIDTH = 830;
	var BOOK_HEIGHT = 260;
	
	// Dimensions of one page in the book
	 var PAGE_WIDTH = 400;
	var PAGE_HEIGHT = 250;
	var PAGE_WIDTH = 200;
	
	// Vertical spacing between the top edge of the book and the papers
	var PAGE_Y = ( BOOK_HEIGHT - PAGE_HEIGHT ) / 2;
	
	// The canvas size equals to the book dimensions + this padding
	var CANVAS_PADDING = 60;
	
	var page = 0;
	
	var canvas = document.getElementById( "pageflip-canvas" );
	var context = canvas.getContext( "2d" );
	
	var mouse = { x: 0, y: 0 };
	
	var flips = [];
	
	var book = document.getElementById( "book" );
	
	var len= document.getElementById('achieved').innerHTML;
	// List of all the page elements in the DOM
	var pages = book.getElementsByTagName( "section" );
	// Organize the depth of our pages and create the flip definitions
	for( var i = 0; i < len; i++ ) {      //Number of days=7 here Should be days_lived
		pages[i].style.zIndex = len - i;
		
		flips.push( {
			// Current progress of the flip (left -1 to right +1)
			progress: 1,
			// The target value towards which progress is always moving
			target: 1,
			// The page DOM element related to this flip
			page: pages[i], 
			// True while the page is being dragged
			dragging: false
		} );
	}
	
	// Resize the canvas to match the book size
	canvas.width = BOOK_WIDTH + ( CANVAS_PADDING * 2 );
	canvas.height = BOOK_HEIGHT + ( CANVAS_PADDING * 2 );
	
	// Offset the canvas so that it's padding is evenly spread around the book
	canvas.style.top = -CANVAS_PADDING + "px";
	canvas.style.left = -CANVAS_PADDING + "px";
	
	// Render the page flip 60 times a second
	setInterval( render, 1000 / 60 );
	
	document.addEventListener( "mousemove", mouseMoveHandler, false );
	document.addEventListener( "mousedown", mouseDownHandler, false );
	document.addEventListener( "mouseup", mouseUpHandler, false );
	
	function mouseMoveHandler( event ) {
		// Offset mouse position so that the top of the spine is 0,0
		mouse.x = event.clientX - book.offsetLeft - ( BOOK_WIDTH / 2 );
		mouse.y = event.clientY - book.offsetTop;
	}
	
	function mouseDownHandler( event ) {
		if (Math.abs(mouse.x) < PAGE_WIDTH) {
			if (mouse.x < 0 && page - 1 >= 0) {
				flips[page - 1].dragging = true;
			}
			else if (mouse.x > 0 && page + 1 < flips.length) {
				flips[page].dragging = true;
			}
		}
		
		// Prevents the text selection cursor from appearing when dragging
		event.preventDefault();
	}
	
	function mouseUpHandler( event ) {
		for( var i = 0; i < flips.length; i++ ) {
			// If this flip was being dragged we animate to its destination
			if( flips[i].dragging ) {
				// Figure out which page we should go to next depending on the flip direction
				if( mouse.x < 0 ) {
					flips[i].target = -1;
					page = Math.min( page + 1, flips.length );
				}
				else {
					flips[i].target = 1;
					page = Math.max( page - 1, 0 );
				}
			}
			
			flips[i].dragging = false;
		}
	}
	
	function render() {
		
		context.clearRect( 0, 0, canvas.width, canvas.height );
		
		for (var i = 0; i < flips.length; i++) {
			var flip = flips[i];
			
			if( flip.dragging ) {
				flip.target = Math.max( Math.min( mouse.x / PAGE_WIDTH, 1 ), -1 );
			}
			
			flip.progress += ( flip.target - flip.progress ) * 0.2;
			
			// If the flip is being dragged or is somewhere in the middle of the book, render it
			if( flip.dragging || Math.abs( flip.progress ) < 0.997 ) {
				drawFlip( flip );
			}
			
		}
		
	}
	
	function drawFlip( flip ) {
		// Strength of the fold is strongest in the middle of the book
		var strength = 1 - Math.abs( flip.progress );
		
		// Width of the folded paper
		var foldWidth = ( PAGE_WIDTH * 0.5 ) * ( 1 - flip.progress );
		
		// X position of the folded paper
		var foldX = PAGE_WIDTH * flip.progress + foldWidth;
		
		// How far the page should outdent vertically due to perspective
		var verticalOutdent = 20 * strength;
		
		// The maximum width of the left and right side shadows
		var paperShadowWidth = ( PAGE_WIDTH * 0.5 ) * Math.max( Math.min( 1 - flip.progress, 0.5 ), 0 );
		var rightShadowWidth = ( PAGE_WIDTH * 0.5 ) * Math.max( Math.min( strength, 0.5 ), 0 );
		var leftShadowWidth = ( PAGE_WIDTH * 0.5 ) * Math.max( Math.min( strength, 0.5 ), 0 );
		
		
		// Change page element width to match the x position of the fold
		flip.page.style.width = Math.max(foldX, 0) + "px";
		
		context.save();
		context.translate( CANVAS_PADDING + ( BOOK_WIDTH / 2 ), PAGE_Y + CANVAS_PADDING );
		
		
		// Draw a sharp shadow on the left side of the page
		context.strokeStyle = 'rgba(0,0,0,'+(0.05 * strength)+')';
		context.lineWidth = 30 * strength;
		context.beginPath();
		context.moveTo(foldX - foldWidth, -verticalOutdent * 0.5);
		context.lineTo(foldX - foldWidth, PAGE_HEIGHT + (verticalOutdent * 0.5));
		context.stroke();
		
		
		// Right side drop shadow
		var rightShadowGradient = context.createLinearGradient(foldX, 0, foldX + rightShadowWidth, 0);
		rightShadowGradient.addColorStop(0, 'rgba(0,0,0,'+(strength*0.2)+')');
		rightShadowGradient.addColorStop(0.8, 'rgba(0,0,0,0.0)');
		
		context.fillStyle = rightShadowGradient;
		context.beginPath();
		context.moveTo(foldX, 0);
		context.lineTo(foldX + rightShadowWidth, 0);
		context.lineTo(foldX + rightShadowWidth, PAGE_HEIGHT);
		context.lineTo(foldX, PAGE_HEIGHT);
		context.fill();
		
		
		// Left side drop shadow
		var leftShadowGradient = context.createLinearGradient(foldX - foldWidth - leftShadowWidth, 0, foldX - foldWidth, 0);
		leftShadowGradient.addColorStop(0, 'rgba(0,0,0,0.0)');
		leftShadowGradient.addColorStop(1, 'rgba(0,0,0,'+(strength*0.15)+')');
		
		context.fillStyle = leftShadowGradient;
		context.beginPath();
		context.moveTo(foldX - foldWidth - leftShadowWidth, 0);
		context.lineTo(foldX - foldWidth, 0);
		context.lineTo(foldX - foldWidth, PAGE_HEIGHT);
		context.lineTo(foldX - foldWidth - leftShadowWidth, PAGE_HEIGHT);
		context.fill();
		
		
		// Gradient applied to the folded paper (highlights & shadows)
		var foldGradient = context.createLinearGradient(foldX - paperShadowWidth, 0, foldX, 0);
		foldGradient.addColorStop(0.35, '#fafafa');
		foldGradient.addColorStop(0.73, '#eeeeee');
		foldGradient.addColorStop(0.9, '#fafafa');
		foldGradient.addColorStop(1.0, '#e2e2e2');
		
		context.fillStyle = foldGradient;
		context.strokeStyle = 'rgba(0,0,0,0.06)';
		context.lineWidth = 0.5;
		
		// Draw the folded piece of paper
		context.beginPath();
		context.moveTo(foldX, 0);
		context.lineTo(foldX, PAGE_HEIGHT);
		context.quadraticCurveTo(foldX, PAGE_HEIGHT + (verticalOutdent * 2), foldX - foldWidth, PAGE_HEIGHT + verticalOutdent);
		context.lineTo(foldX - foldWidth, -verticalOutdent);
		context.quadraticCurveTo(foldX, -verticalOutdent * 2, foldX, 0);
		
		context.fill(); 		context.stroke(); 		context.restore();
	}
	
})();


 var canvas = document.getElementById( "pageflip-canvas" );
	var context = canvas.getContext( "2d" );
	  
	document.getElementById("one").innerHTML += "Day one. wadup.";
	document.getElementById("two").innerHTML = "this comes from JS";
	document.getElementById("three").innerHTML = "Blah blah";
	document.getElementById("four").innerHTML = "Day one. wadup.";
	document.getElementById("five").innerHTML = "this comes from JS";
	document.getElementById("six").innerHTML = "Blah blah";
	document.getElementById("seven").innerHTML = "Day one. wadup.";
	document.getElementById("eight").innerHTML = "this comes from JS";
	document.getElementById("nine").innerHTML = "Blah blah";
	document.getElementById("ten").innerHTML = "Day one. wadup.";
	document.getElementById("eleven").innerHTML = "this comes from JS";
	document.getElementById("twelve").innerHTML = "Blah blah";
	 
switch("4")
	{
	case 1:document.getElementById("one").innerHTML += "Last drop of water"; break;
	case 2:document.getElementById("two").innerHTML += "Last drop of water";break;
	case 3:document.getElementById("three").innerHTML += "Last drop of water";break;
	case 4:document.getElementById("four").innerHTML += "Last drop of water";break;
	case 5:document.getElementById("five").innerHTML += "Last drop of water";break;
	case 6:document.getElementById("six").innerHTML += "Last drop of water";break;
	
	
	}	

}