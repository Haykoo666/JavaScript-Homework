/* debugger; */
function rgbToHex(rgb) {
  let sep = rgb.indexOf(",") > -1 ? "," : " ";

  rgb = rgb.substr(4).split(")")[0].split(sep);
  console.log(rgb)

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

console.log(rgbToHex("rgb(45, 255, 192)"))
