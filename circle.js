class Circle {
    /**
     * 
     * @param {number} x x-coordinate for center of circle
     * @param {number} y y-coordinate for center of circle
     * @param {number} radius radius of circle
     * @param {number} dx speed of circle in x-dir
     * @param {number} dy speed of circle in y-dir
     * @param {string} color color of circle 
     * @param {number} lineWidth width of line b/w circles
     */

    constructor(x, y, radius, dx, dy, color, lineWidth) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx + Math.random() * 2;
        this.dy = dy + Math.random() * 2;
        this.dirX = Math.random() < 0.5 ? -1 : 1;
        this.dirY = Math.random() < 0.5 ? -1 : 1;
        if (color == 'random')
            this.fillStyle = `rgb(${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)})`;
        else
            this.fillStyle = color;
        this.lineWidth = lineWidth;
    }

    /**
     * 
     * @param {*} ctx context for canvas
     * @param {[Circle]} circles array of object of Circle class
     * @param {number} mouseX x-coordinate of mouse
     * @param {number} mouseY y-coordinate of mouse
     */

    update(ctx, circles, mouseX, mouseY) {
        this.x += this.dirX * this.dx;
        this.y += this.dirY * this.dy;
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dirX *= -1;
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.dirY *= -1;
        }
        this.#mouseLines(ctx, mouseX, mouseY);//mouse move
        this.#strokes(ctx, circles);
        this.#draw(ctx);
    }


    #draw(ctx) {
        ctx.beginPath();
        ctx.lineWidth = 0.01;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.fillStyle;
        ctx.fill();
        ctx.stroke();
    }

    #strokes(ctx, circles) {
        circles.forEach(circle => {
            let dis = this.#calDistance(circle.x, circle.y);
            if (dis < 100) {
                this.#drawLine(ctx, circle.x, circle.y, this.lineWidth, this.fillStyle);
            }
            else if (dis < 200) {
                this.#drawLine(ctx, circle.x, circle.y, this.lineWidth * 0.2, this.fillStyle);
            }
        });
    }

    #mouseLines(ctx, x, y) {
        let dis = this.#calDistance(x, y)
        if (dis < 200)
            this.#drawLine(ctx, x, y, this.lineWidth, 'red');
    }

    #drawLine(ctx, x, y, lineWidth, color) {
        ctx.beginPath();
        ctx.lineTo(x, y);
        ctx.lineTo(this.x, this.y);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.stroke();
    }

    #calDistance(x, y) {
        return Math.floor(Math.sqrt(Math.pow(Math.abs(x - this.x), 2) + Math.pow(Math.abs(y - this.y), 2)));
    }
}

export default Circle; 