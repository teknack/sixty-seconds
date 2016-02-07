 var Sprite = function(fn) {
 
    this.image = null;
    this.load = function(ig) { this.image = new Image(); this.image.src = ig;  }
    this.frameIndex = 0;
    this.CurrentFrame = 0;
        this.load(fn);
       
     
    this.drawAnimated = function(x, y, ssIndex,ctx)
    {  ctx.clearRect(0,0,1200,700);
		
		var floor =new Image();
        floor.src="assets/img/housel2.jpg";
        ctx.drawImage(floor,0,0,1200,700);
		
		if (inVault()) {
			//ctx.drawImage()
		return 0;			}
            this.frameIndex++;
            if (this.frameIndex >= 4)
                {
                this.frameIndex = 0;}
               
            this.CurrentFrame = ssIndex[this.frameIndex];
       
        ctx.drawImage(this.image, (this.CurrentFrame%6)*48, Math.floor(this.CurrentFrame/6)*48, 45, 45, x, y, 25,25);
    };
 
};
