
var point={
	pts:0,
 
 health:0,
 dayofFood:10,
 dayofFuel:10,
 dayofWater:10,
 
days_lived:30,
 
};
var spcl=0;
var foodini=0;
var fuelini=0;
var waterini=0;
var o=0;

function calculate(resources){
	for(var i=0;i<resources.length;i++)
if(resources[i].id=="oxy")
 o=i;
	if(o){
					for(var i=0;i<resources.length;i++){

				if(resources[i].id == "wat")
				total_water++;
			    if(resources[i].id == "fue")
				total_fuel++;
			    if(resources[i].id == "foo")
				total_food++;
                if(resources[i].id == "tor")
				torch=1;
			    if(resources[i].id == "first_aid")
				first_aid=1;
                
                
				}

                 if(total_water == 5 ) spcl++;
                  if(total_fuel == 5 ) spcl++;
                  if(total_food == 4 ) spcl++;
                  if(torch) spcl++;

						for(var i=1;point.health>0 ;i++,days_lived++)
						{ 
						if(total_water >0 && total_food > 0  && total_fuel > 0)    
						   { 
						   	total_water-=0.25;
						    total_fuel-= 0.20;
						    total_food-=0.1;
	
						   }
						else if(total_water > 0 && total_food > 0 && total_fuel <=0)    
						   {
						   	total_water-=0.25;
						   point.health-=10;
						    total_food-=0.1;
						   } 
						else if(total_water > 0 && total_food <= 0 && total_fuel > 0)    
						   {
						   	total_water-=0.25;
						   point.health-=20;
						   } 
						else if(total_water > 0 && total_food <= 0 && total_fuel <= 0)    
						   {
						   	total_water-=0.25;
						   point.health-=20;
						   } 
						else if(total_water <=0 && total_food > 0 && total_fuel > 0)    
						   {
						   total_food-=25;

						   point.health-=10;
						   } 
						else if(total_water <= 0 && total_food > 0 && total_fuel <=0)    
						   { total_food-=25;
						   point.health-=10;
						   } 
						else if(total_water <=0 && total_food <= 0 && total_fuel > 0)    
						   {
						   	point.health-=30;
						   } 
						else if(total_water <=0 && total_food <= 0 && total_fuel <= 0)    
						   {
						   	point.health -=30;
						   } 
                        if(foodini == 0)
                         if(total_food==0) {foodini= 1; point.dayofFood= i;  }
						if(fuelini == 0)
                         if(total_fuel==0) {fuelini= 1; point.dayofFuel= i;  }
						if(waterini == 0)
                         if(total_water==0) {foodini= 1; point.dayofWater= i;  }
						

						if(point.health == 0 && first_aid)
							point.health+=20;

						
                       switch(spcl)
                    {

                       case 1:days_lived+=2;
                       case 2:days_lived+=5;
                       case 3:days_lived+=8;
                       case 4:days_lived+=10;
                   }

						}// for ends

}//if oxygen

  ajax_post();//called ajax to send data to database
return point;
}


  function ajax_post(){
/* $.ajax({
                    url:"dump.php",
                    type:"POST",
                    dataType:"data",
                    data:{no_of_days_lived:point.days_lived,day_of_no_food:point.dayofFood, day_of_no_water:point.dayofWater, day_of_no_fuel:point.dayofFuel},
                    //type: should be same in server code, otherwise code will not run
                    ContentType:"application/x-www-form-urlencoded",
                    success: function(response){
                        alert("scores updated");
                    },
                    error: function(err){
                        alert("error loading scores");
                    }
    }); // func ajax
*/

 $.post("dump.php",{no_of_days_lived:point.days_lived,day_of_no_food:point.dayofFood, day_of_no_water:point.dayofWater, day_of_no_fuel:point.dayofFuel},function(){});
}