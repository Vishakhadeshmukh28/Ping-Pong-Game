document.addEventListener("DOMContentLoaded",()=>{
    let ball=document.getElementById("ball");
    let paddle=document.getElementById("paddle");



    //here the ballX and ballY will be helping us to set a starting point of ball w.r.t table
    let ballX=10;//distance of the top of the ball w.r.t ping pong table
    let ballY=10;//distance of the left of the ball w.r.t ping pong table

    let dx=2;//displacement factor in x-direction ,2->you will displace by 2 px in +x direction,-2->you will displace 2 px in -x direction
    let dy=2;//displacement factor in y-direction ,2->you will displace by 2 px in +y direction,-2->you will displace 2 px in -y direction
     
    ball.style.top=`${ballX}px`;
    vall.style.left=`${ballY}px`;

    setInterval(function exec(){
        ballX +=dx;
        ballY +=dy;


        ball.style.left=`${ballX}px`;
        ball.style.top=`${ballY}px`;

        //if(ballX>700-20||ballX<=0)dx *=-1;
       // if(ballY>400-20||ballY<=0)dy *=-1;
        
       if(ballX>table.offsetWidth-ball.offsetWidth || ballX<=0) dx*= -1;//change x-direction
       if(ballY>table.offsetHeight-ball.offsetHeight||ballY<=0) dy*=-1;//change y-direction

    },1);



let paddleY = 0;
let dPy = 5; // displacement for paddle in y-direction

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 38 && paddleY > 0) {
    // up arrow
    paddleY += -dPy;
    console.log("up", paddleY);
  } else if (event.keyCode === 40 && paddleY < table.offsetHeight - paddle.offsetHeight) {
    // down arrow
    paddleY += dPy;
  }

  paddle.style.top = `${paddleY}px`;
});




})