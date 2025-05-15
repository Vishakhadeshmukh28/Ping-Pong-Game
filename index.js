document.addEventListener("DOMContentLoaded", () => {
  let ball = document.getElementById("ball");
  let paddle = document.getElementById("paddle");
  let table = document.getElementById("ping-pong-table");

  let ballX = 10;
  let ballY = 10;
  let dx = 2;
  let dy = 2;

  ball.style.top = `${ballX}px`;
  ball.style.left = `${ballY}px`;

  setInterval(function exec() {
    ballX += dx;
    ballY += dy;

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    if(ballX < paddle.offsetLeft+ paddle.offsetWidth &&
        ballY>paddle.offsetTop &&
         ballY-ball.offsetHeight<paddle.offsetTop+paddle.offsetHeight
    ){
        dx*=-1;
    }



    if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1;
    if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1;
  }, 2); // reduced speed for better visibility

  let paddleY = 0;
  let dPy = 10;

  document.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.keyCode === 38 && paddleY > 0) {
      // Up arrow
      paddleY -= dPy;
    } else if (event.keyCode === 40 && paddleY < table.offsetHeight - paddle.offsetHeight) {
      // Down arrow
      paddleY += dPy;
    }

    paddle.style.top = `${paddleY}px`;
  });
});
