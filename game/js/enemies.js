export contest enemies = [];
const SIZE = 26;

function pushEnemie(canvas) {
    const w = SIZE;
    const h = SIZE;
    const x = Math.random() * (canvas.width - w);
    const y = -h;
    const vy = 5;

    enemies.push()
}
export function spawnEnemie(canvas) {
    if (enemies.length < 5) {
        pushEnemie(canvas);
    }
}
