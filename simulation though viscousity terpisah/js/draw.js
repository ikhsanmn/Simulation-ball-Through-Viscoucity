
   function draw(){
   	//clear canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    wadah();
    cairan();
    //ctx.save();
    //ball.posisi.x, ball.posisi.y
    //ctx.translate(ball.posisi.x,ball.posisi.y ); //X Y
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 0, 0, 1)";
    ctx.arc(X,Y, ball.radius, 0, Math.PI*2, true);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    //wadah();
    //cairan();
   }
draw();