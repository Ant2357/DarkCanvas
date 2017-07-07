var draw = function (drawType, canvas) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    var maxRangeRandom = 1000;
    for (var i = 0; i < 10; i++) {
        var x = drawType ? Math.random() * maxRangeRandom : ((Math.random() * maxRangeRandom) + (Math.random() * maxRangeRandom)) / 2;
        var y = drawType ? Math.random() * maxRangeRandom : ((Math.random() * maxRangeRandom) + (Math.random() * maxRangeRandom)) / 2;
        ctx.arc(x, y, 5, 0, Math.PI * 2, true);
    }
    ctx.stroke();
    ctx.closePath();
    requestAnimationFrame(draw.bind(null, drawType, canvas));
};
window.onload = function () {
    console.log("お前が長くデベロッパーツールを覗くならば、");
    console.log("デベロッパーツールもまた等しくお前を見返すのだ。");
    var drawType = Boolean(Math.floor(Math.random() * 2));
    var canvas = document.getElementById('canvas');
    draw(drawType, canvas);
};
