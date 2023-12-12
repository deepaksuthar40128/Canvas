import Dot from "./dot.js";
import Sphere from "./sphere.js";

let canvas = document.getElementById('myCanvas');
let ww = window.innerWidth, wh = window.innerHeight;
canvas.height = wh;
canvas.width = ww;


let ctx = canvas.getContext('2d');

let prespective = ww * 0.8;
let x_center = ww / 2, y_center = wh / 2;

let sphere = new Sphere(200, prespective, x_center, y_center, ww, wh, 'red');

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, ww, wh);
    sphere.update(ctx);
}
animate();