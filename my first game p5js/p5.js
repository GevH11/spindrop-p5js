
let x = 0;
let y = 0;
let w = 20;

let x1 = 1;
let y1 = 1;
let w1 = 40;

let easing = 0.03;
let a = 0;

let score = 0;
let winScore = 10;
let gameOver = false;
let win = false;

function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER, CENTER);
  textSize(32);
  x = width / 2;
}

function draw() {
  background("lightgreen");

  if (gameOver) {
    fill(win ? "green" : "red");
    text(win ? "YOU WIN!" : "YOU LOSE!", width / 2, height / 2);
    return;
  }

  // Квадрат
  fill("cyan");
  push();
  translate(x, y);
  rotate(a);
  rect(-10, -10, 20, 20);
  pop();
  a += 0.1;
  y += 2;

  if (y > height) {
    gameOver = true;
  }

  // Шар
  let targetX = mouseX;
  let dx = targetX - x1;
  x1 += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y1;
  y1 += dy * easing;

  fill("cyan");
  ellipse(x1, y1, w1, w1);

  // Столкновение
  if (
    x + w > x1 &&
    x < x1 + w1 &&
    y + w > y1 &&
    y < y1 + w1 / 2
  ) {
    y = random(100) * -1;
    x = random(width);
    score++;

    if (score >= winScore) {
      win = true;
      gameOver = true;
    }
  }

  // Очки
  fill(0);
  textSize(16);
  text("Score: " + score, width - 60, 20);
}