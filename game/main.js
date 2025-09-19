document.getElementById("txt").innerText = "ちっす";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// fillRect(x座標（横）、y座標（縦）、横幅、縦幅)
// 自分のキャラクターに見立てた四角形をとりあえず作ってみてください。

ctx.fillStyle = "magenta";
ctx.fillRect(225, 480, 30, 30);
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let x =225;

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        x -= 50;
    } else if (e.key === "ArrowRight") {
        x += 50;
    }
})

let y1 = 0;
let y2 = -150



function gameLoop(){
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "yellow";
ctx.fillRect(150, y1, 30, 30);
y1 += 10;
ctx.fillStyle = "yellow";
ctx.fillRect(300, y2, 30, 30);
y2 += 10;

ctx.fillStyle = "magenta";
ctx.fillRect(x, 480, 30, 30);
requestAnimationFrame(gameLoop);



}

gameLoop();