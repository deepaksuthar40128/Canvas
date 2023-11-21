import Circle from "./circle.js";
let canvas = document.getElementById('myCanvas');


let wh = window.innerHeight, ww = window.innerWidth;
canvas.height = wh - 20;
canvas.width = ww;
let ctx = canvas.getContext('2d');


let circles = [];
for (let i = 0; i < 60; i++) {
    circles.push(new Circle(20 + Math.random() * ww, 20 + Math.random() * wh, 1, 3, 3, 'random', 1));
}


let mx = 0, my = 0;//initial coordinates of mouse
document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
})

document.addEventListener('click', e => { //push 5 new circles
    for (let i = 0; i < 5; i++)
        circles.push(new Circle(e.clientX, e.clientY, 1, 3, 3, 'random', 1));
})



function animate() {
    ctx.clearRect(0, 0, ww, wh);
    requestAnimationFrame(animate);
    circles.forEach(circle =>
        circle.update(ctx, circles, mx, my)
    )
}
animate();