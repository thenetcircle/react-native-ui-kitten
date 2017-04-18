export function changeColor(color, percent) {
  if (color === 'transparent')
    return color;

  let withAlpha = color.length > 7;

  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);
  let A = 255;
  if (withAlpha)
    A = parseInt(color.substring(7, 9), 16);

  R = parseInt(R / percent);
  G = parseInt(G / percent);
  B = parseInt(B / percent);

  if (A != 255)
    A = parseInt(A / percent);


  R = (R < 255) ? R : 255;
  G = (G < 255) ? G : 255;
  B = (B < 255) ? B : 255;
  A = (A < 255) ? A : 255;

  let RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
  let GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
  let BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));
  let AA = ((A.toString(16).length == 1) ? "0" + A.toString(16) : A.toString(16));

  return "#" + RR + GG + BB + AA;
}