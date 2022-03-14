class Scoreboard {
    constructor(x, y) {
        this.score = 0;
        this.x = x;
        this.y = y;
    }

    render(canvas) {
        let pen = canvas.getContext("2d");
        pen.font = "36px Impact";
        pen.fillStyle = "antiquewhite";
        pen.textAlign = "center";
        pen.fillText(this.score, this.x, this.y);

        pen.beginPath();
        pen.setLineDash([10, 15]);
        // pen.lineWidth = 2;
        pen.strokeStyle = "antiquewhite"
        pen.moveTo(390, 0);
        pen.lineTo(390, 600);
        pen.stroke();

    }
}
