
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
    x: canvas.width / 2 - 15,
    y: canvas.height - 60,
    width: 30,
    height: 30,
    color : "magenta",
};

// fillRect(x座標（横）、y座標（縦）、横幅、縦幅)
// 自分のキャラクターに見立てた四角形をとりあえず作ってみてください。

ctx.fillStyle = "magenta";
ctx.fillRect(225, 480, 30, 30);
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);


window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        player.x -= 10;
    } else if (e.key === "ArrowRight") {
        player.x += 10;
    } else if (e.code === "Space"){
        tryShoot();
    }
})

const bullets = [];
const BULLET_SPEED =-5;      

function tryShoot(){
    bullets.push({
        x: player.x,
        y: player.y,
        width: 5,
        height: 5,
        vy: BULLET_SPEED,
    })
}

function update(){
    for (let i = 0; i < bullets.length; i++){
    const bullet = bullets[i];
    bullet.y += bullet.vy;
    if (bullet.y < 0) {
        bullets,splice(i, 1);
    }
}


}

function drow(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    ctx.fillStyle = "white";
    ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    for (let i = 0; i < bullets.length; i++){
    const bullet = bullets[i];
    bullet.y += bullet.vy;
    
}}

function gameLoop(){

    update();
    drow();

   


requestAnimationFrame(gameLoop);



}

gameLoop();