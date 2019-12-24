   function wadah(){
   	//var ctx=canvas.getContext('2d');
   	ctx.beginPath();
   	//width 500 height 400
   	ctx.moveTo(160,80);
   	ctx.lineTo(160,380);
   	ctx.moveTo(160,380);
   	ctx.lineTo(200,380);
   	ctx.moveTo(200,380);
   	ctx.lineTo(200,80);

   	//alas
   	ctx.moveTo(160,380);
   	ctx.lineTo(155,400);
   	ctx.moveTo(200,380);
   	ctx.lineTo(205,400);

   	ctx.closePath();
   	ctx.stroke();
   	//cairan();
   }