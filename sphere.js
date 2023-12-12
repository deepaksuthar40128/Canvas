import Dot from "./dot.js";
import world from "./world.js"
import india from "./india.js"

class Sphere {
    constructor(radius, prespective, x_center, y_center, ww, wh, fillStyle) {
        this.radius = radius;
        this.prespective = prespective;
        this.x_center = x_center;
        this.y_center = y_center;
        this.ww = ww;
        this.wh = wh;
        this.fillStyle = fillStyle;
        this.dots = [];
        this.#constructSphere();
    }
    #constructSphere() {
        // for (let alpha = 0; alpha < 360; alpha++) {
        //     for (let theta = 0; theta < 180; theta++) {
        //         if ((alpha ^ theta) % 13 == 0)
        //             this.dots.push(new Dot(alpha, theta, 1, this.prespective, this.x_center, this.y_center, this.ww, this.wh, 'red', this.radius));

        //     }
        // }
        // for (let alpha = 0; alpha < 360; alpha ++) {
        //     for (let theta = 0; theta < 180; theta+=20) {
        //         this.dots.push(new Dot(alpha, theta, 1, this.prespective, this.x_center, this.y_center, this.ww, this.wh, 'skyblue', this.radius));
        //     }
        // }
        // for (let alpha = 0; alpha < 360; alpha += 20) {
        //     for (let theta = 0; theta < 180; theta++) {
        //         this.dots.push(new Dot(alpha, theta, 1, this.prespective, this.x_center, this.y_center, this.ww, this.wh, 'skyblue', this.radius));
        //     }
        // }
        world.forEach(coordinate => {//now lets plot india
            this.dots.push(new Dot(90 + coordinate[0], 90 + coordinate[1], 1, this.prespective, this.x_center, this.y_center, this.ww, this.wh, this.fillStyle, this.radius));
        })
        // india.forEach(coordinate => {//now lets plot india
        //     this.dots.push(new Dot( 90+coordinate[0], 90 + coordinate[1], 1, this.prespective, this.x_center, this.y_center, this.ww, this.wh, 'green', this.radius));
        // })
    }
    update(ctx) {
        this.dots.forEach(dot => dot.update(ctx));
    }
}

export default Sphere;