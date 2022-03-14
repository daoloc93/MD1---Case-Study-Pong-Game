class Ball {
    constructor(x, y, radius = 10, color = "chocolate") {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.xMove = 3;
        this.yMove = 3;
        this.count = 0;
    }

    render(canvas) {
        let pen = canvas.getContext("2d");
        pen.beginPath();
        pen.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        pen.strokeStyle = "chocolate";
        pen.stroke();
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }

    moveBall() {
        this.x += this.xMove;
        this.y += this.yMove;
    }

    bounceY() {
        this.yMove *= -1;
    }

    bounceX() {
        this.xMove *= -1;
        this.count ++;
    }

    increaseSpeed() {
        if (this.count % 2 == 0) {
            this.xMove++;
            this.yMove++;
        } else {
            this.xMove --;
            this.yMove --;
        }
    }

    resetPosition() {
        this.count = 0;
        this.x = 390;
        this.y = 300;
        this.xMove = 3;
        this.yMove = 3;
        this.bounceX();
    }
}



