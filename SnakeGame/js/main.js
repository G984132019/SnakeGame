ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2, canv.height/2, 20,20);

let score = 0;
let appleXb = appleYb = 2;
setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canv.width, canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px, y:py});
  for(let i = 0; i<snake.length-1; i++){
    ctx.fillRect( snake[i].x*SIZE,
                  snake[i].y*SIZE,SIZE-2,SIZE-2);
    if(snake[i].x == px && snake[i].y == py){
      tail = MIN;
    }
  }

  while(snake.length > tail){
    snake.shift();
  }

  if(appleX == px && appleY == py){
    tail++;
    score++;
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(appleX*SIZE, appleY*SIZE, SIZE-2,SIZE-2);

  if(appleXb == px && appleYb == py){
    tail--;
    score--;
    appleXb = Math.floor(Math.random()*canv.width/SIZE);
    appleYb = Math.floor(Math.random()*canv.height/SIZE);
  }


  ctx.fillStyle = "blue";
  ctx.fillRect(appleXb*SIZE, appleYb*SIZE, SIZE-2,SIZE-2);
  ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: "+score, 8, 20);
}, 1000/FPS);
