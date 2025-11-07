export const enemies = [];
const SIZE = 50     ;
const enemyImage = new Image();
enemyImage.src = "https://static.wikia.nocookie.net/dragonquest/images/8/8d/DQIX_-_Cruelcumber.png/revision/latest/smart/width/250/height/250?cb=20191107065103&path-prefix=ja";

function pushEnemies(canvas) {
  const w = SIZE;
  const h = SIZE;
  const x = Math.random() * (canvas.width - w);
  const y = 0;
  const vy = 5

  enemies.push({ x, y, width: w, height: h, vy });
}

export function spawnEnemy(canvas) {
 if (enemies.length < 10) {
    pushEnemies(canvas);
 }
}

export function updateEnemies(canvas) {
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    e.y += e.vy;
    if (e.y > canvas.height) {
      enemies.splice(i, 1);
    }
  }
}

export function drawEnemies(ctx) {
  ctx.fillStyle = "crimson";
  for (const e of enemies) {
    ctx.drawImage(enemyImage, e.x, e.y, e.width, e.height);
  }
}
