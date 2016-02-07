
var point={
	pts:0,
 total_fuel;0,
 total_water:0,
 total_food:0,
 health:0,
 dayofFood:0,
 dayofFuel:0,
 dayofWater:0,
 
days_lived:0,
 
};
var spcl=0;
var foodini=0;
var fuelini=0;
var waterini=0;
var o=0;

function calculate(resources){ alert(resources.length);
	for(var i=0;i<resources.length;i++)
if(resources[i]=="oxy")
 o=i;
	if(o){alert("oxygen taken");
					for(var i=0;i<resources.length;i++){

				if(resources[i].id == "wat")
				point.total_water++;
			    if(resources[i].id == "fue")
				point.total_fuel++;
			    if(resources[i].id == "foo")
				point.total_food++;
                if(resources[i].id == "tor")
				torch=1;
			    if(resources[i].id == "first_aid")
				first_aid=1;
                
                
				}

                 if(point.total_water == 5 ) spcl++;
                  if(point.total_fuel == 5 ) spcl++;
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
						   point.total_food-=25;

						   point.health-=10;
						   } 
						else if(point.total_water <= 0 && point.total_food > 0 && point.total_fuel <=0)    
						   { point.total_food-=25;
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
                        if(foodini == 0)
                         if(point.total_food==0) {foodini= 1; point.dayofFood= i;  }
						if(fuelini == 0)
                         if(point.total_fuel==0) {fuelini= 1; point.dayofFuel= i;  }
						if(waterini == 0)
                         if(point.total_water==0) {foodini= 1; point.dayofWater= i;  }
						

						if(point.health == 0 && first_aid)
							point.health+=20;

						
                       switch(spcl)
                    {

                       case 1:point.days_lived+=2;
                       case 2:point.days_lived+=5;
                       case 3:point.days_lived+=8;
                       case 4:point.days_lived+=10;
                   }

						}// for ends

}//if oxygen

  ajax_post();//called ajax to send data to database

  
return point;
}

function getItem(){

document.getElementById("foo").innerHTML=point.total_food;
document.getElementById("wat").innerHTML=point.total_water;
document.getElementById("fue").innerHTML=point.total_fuel;
document.getElementById("nofood").innerHTML=point.dayofFood;
document.getElementById("nowater").innerHTML=point.dayofWater;
document.getElementById("nofuel").innerHTML=point.dayofFuel;
document.getElementById("achieved").innerHTML=point.days_lived;

}
  function ajax_post(){


 $.post("dump.php",{no_of_days_lived:point.days_lived,water:point.total_water,food:point.total_food,fuel:point.total_fuel,day_of_no_food:point.dayofFood, day_of_no_water:point.dayofWater, day_of_no_fuel:point.dayofFuel},function(){});
}