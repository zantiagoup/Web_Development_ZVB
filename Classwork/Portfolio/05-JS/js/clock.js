const drawClock = () => {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
};

const drawFace = (ctx, radius) => {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  // Draw the edge circle with gradient
  // from just inside the radius to just outside it, so it looks like a ring
  const grad = ctx.createRadialGradient(
    0,
    0,
    radius * 0.95,
    0,
    0,
    radius * 1.05
  );
  grad.addColorStop(0, "#333");
  grad.addColorStop(0.5, "white");
  grad.addColorStop(1, "#333");
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();

  // Center circle
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();
};

const drawNumbers = (ctx, radius) => {
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";
  // 12 numbers, each one 30 degrees (PI/6) after the previous one
  for (let num = 1; num < 13; num++) {
    const ang = (num * Math.PI) / 6;
    // rotate to the number, move to the edge, rotate back so the text stays upright
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    // and undo the three moves for the next number
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
};

const drawTime = (ctx, radius) => {
  const now = new Date();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  //hour
  // a full turn is 2*PI, so an hour is PI/6 and a minute or a second is PI/30.
  // the extra fractions are what move the hour and minute hands little by little
  const hour =
    ((now.getHours() % 12) * Math.PI) / 6 +
    (minute * Math.PI) / (6 * 60) +
    (second * Math.PI) / (360 * 60);
  drawHand(ctx, hour, radius * 0.5, radius * 0.07);
  //minute
  drawHand(
    ctx,
    (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60),
    radius * 0.8,
    radius * 0.07
  );
  // second
  drawHand(ctx, (second * Math.PI) / 30, radius * 0.9, radius * 0.02);
};

const drawHand = (ctx, pos, length, width) => {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
};
