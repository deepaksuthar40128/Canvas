class Dot {
    constructor(alpha, theta, radius, prespective, x_center, y_center, ww, wh, fillStyle, sphereRadius) {
        this.x = undefined;
        this.y = undefined;
        this.z = undefined;
        this.alpha = alpha;
        this.theta = theta;
        this.ww = ww;
        this.wh = wh;
        this.radius = radius;
        this.prespective = prespective;
        this.x_center = x_center;
        this.y_center = y_center;
        if (fillStyle == 'random') this.fillStyle = `rgb(${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)})`
        else
            this.fillStyle = fillStyle;
        this.sphereRadius = sphereRadius;
        this.scaledProjection = undefined;
        this.calculatedX = undefined;
        this.calculatedY = undefined;
    }
    #draw(ctx) {
        this.#calculateCoordinate();
        ctx.beginPath();
        ctx.strokeWidth = 0.001;
        ctx.globalAlpha = (1 - ((this.z + this.sphereRadius) / (2 * this.sphereRadius)) * 0.8);
        console.log(ctx.globalAlpha)
        ctx.arc(this.calculatedX, this.calculatedY, this.scaledProjection * this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.fillStyle;
        ctx.fill();
    }
    update(ctx) {
        this.alpha += 1;
        this.#draw(ctx);
    }
    #calculateCoordinate() {
        let radianAlpha = this.#toRadian(this.alpha);
        let radianTheta = this.#toRadian(this.theta);
        this.x = this.sphereRadius * (Math.cos(radianAlpha) * Math.sin(radianTheta));
        this.y = this.sphereRadius * (Math.cos(radianTheta));
        this.z = this.sphereRadius * (Math.sin(radianAlpha) * Math.sin(radianTheta));
     
        this.scaledProjection = (this.prespective / (this.z + this.prespective));
        this.calculatedX = this.x * this.scaledProjection + this.x_center;
        this.calculatedY = this.y * this.scaledProjection + this.y_center;
    }
    #toRadian(degree) {
        return Math.PI * (degree / 180);
    }
}

export default Dot;