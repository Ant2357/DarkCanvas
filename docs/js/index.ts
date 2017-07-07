
const draw = (drawType: boolean, canvas): void => {
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  const maxRangeRandom: number = 1000;
  for (let i: number = 0; i < 10; i++) {
    const x: number = drawType ? Math.random() * maxRangeRandom : ((Math.random() * maxRangeRandom) + (Math.random() * maxRangeRandom)) / 2;
    const y: number = drawType ? Math.random() * maxRangeRandom : ((Math.random() * maxRangeRandom) + (Math.random() * maxRangeRandom)) / 2;
    ctx.arc(x, y, 5, 0, Math.PI * 2, true);
  }
  ctx.stroke();
  ctx.closePath()
  requestAnimationFrame(draw.bind(null, drawType, canvas));
};

window.onload = (): void => {
  console.log("お前が長くデベロッパーツールを覗くならば、");
  console.log("デベロッパーツールもまた等しくお前を見返すのだ。");
  const drawType: boolean = Boolean(Math.floor(Math.random() * 2));
  const canvas = <HTMLCanvasElement>document.getElementById('canvas');
  draw(drawType, canvas);
};