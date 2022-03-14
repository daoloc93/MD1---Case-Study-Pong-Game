class Paddle {

    constructor(x, y, width, height, color = "antiquewhite") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render(canvas) {
        let pen = canvas.getContext("2d");
        pen.beginPath();
        pen.fillStyle = this.color;
        pen.fillRect(this.x, this.y, this.width, this.height);
        pen.strokeStyle = this.color;
        pen.stroke();
        pen.closePath();
    }

    goDown() {
        this.y += 25;
    }

    goUp() {
        this.y -= 25;
    }
}