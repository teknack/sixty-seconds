  var Sprite = function(fn,x,y) {
    this.pos=[x,y];
    this.size=[25,25];
    this.image = null;
    this.load = function(ig) { this.image = new Image(); this.image.src = ig;  }
    this.frameIndex = 0;
    this.CurrentFrame = 0;
    this.load(fn);

    
    this.drawAnimated = function(x, y, ssIndex,ctx)
    {   
 ctx.clearRect(0,0,1200,700);
//alert("cleared");
            var floor =new Image();
        floor.src="assets/img/housel1.jpg";
        ctx.drawImage(floor,0,0,1200,700);
    
 //alert("floor");
  if(inVault()) return 0;
            this.frameIndex++;
              
            if (this.frameIndex >= 4)
                {
                this.frameIndex = 0;}
         
            this.CurrentFrame = ssIndex[this.frameIndex];
      
        ctx.drawImage(this.image, (this.CurrentFrame%6)*48, Math.floor(this.CurrentFrame/6)*48, 48,48, x, y,30,30);
        //lert("draw");
    };
 

}