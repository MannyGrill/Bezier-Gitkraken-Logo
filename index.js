var w = 1200,
    h = 900,
    t = 0.0,
    delta = 0.005,
    padding = 0,
    reflectLineX = 679,
    controlPoints = [

    // Outside Outer-left tentacle
    [{x: 661, y: 675}, {x: 661, y: 892}],
    [{x: 661, y: 892}, {x: 380, y: 888}, {x: 163, y: 578}, {x: 279, y: 303}],

    // Point Outer-left tentacle
    [{x: 279, y: 303}, {x: 305, y: 288}, {x: 310, y: 315}],

    // Inside Outer-left tentacle
    [{x: 310, y: 315}, {x: 205, y: 578}, {x: 418, y: 844}, {x: 628, y: 851}],
    [{x: 628, y: 851}, {x: 628, y: 670}],

    [{x: 628, y: 670}, {x: 605, y: 667}, {x: 593, y: 662}],

    // Outside Inner-left tentacle
    [{x: 593, y: 662}, {x: 593, y: 815}],
    [{x: 593, y: 815}, {x: 314, y: 766}, {x: 180, y: 330}, {x: 506, y: 140}],

    // Point Inner-left tentacle
    [{x: 506, y: 140}, {x: 535, y: 142}, {x: 525, y: 171}],

    // Inside Inner-left tentacle
    [{x: 525, y: 171}, {x: 228, y: 341}, {x: 356, y: 707}, {x: 558, y: 767}],
    [{x: 558, y: 767}, {x: 558, y: 633}],

    // Head left
    [{x: 558, y: 633}, {x: 510, y: 620}, {x: 510, y: 547}, {x: 547, y: 535}],

    [{x: 547, y: 535}, {x: 545, y: 490}, {x: 538, y: 445}, {x: 475, y: 430}, {x: 481, y: 420}],
    [{x: 481, y: 420}, {x: 481, y: 385}],
    [{x: 481, y: 385}, {x: 501, y: 290}, {x: 609, y: 152}, {x: 679, y: 140}],

    // Eye left
    [{x: 576, y: 617}, {x: 594, y: 617}, {x: 611, y: 600}, {x: 611, y: 582}],
    [{x: 611, y: 582}, {x: 611, y: 564}, {x: 594, y: 547}, {x: 576, y: 547}],
    [{x: 576, y: 547}, {x: 558, y: 547}, {x: 541, y: 564}, {x: 541, y: 582}],
    [{x: 541, y: 582}, {x: 541, y: 600}, {x: 558, y: 617}, {x: 576, y: 617}],
    //[{x: 562, y: 603}, {x: 580, y: 603}, {x: 597, y: 586}, {x: 597, y: 568}],
    // Test ~to be deleted~
    //[{x: (reflectLineX+(reflectLineX - 661)), y: 675}, {x: (reflectLineX+(reflectLineX - 661)), y: 892}],

    // Outside Outer-left tentacle
    [{x: 661, y: 675}, {x: 661, y: 892}],
    [{x: 661, y: 892}, {x: 380, y: 888}, {x: 163, y: 578}, {x: 279, y: 303}],

    // Point Outer-left tentacle
    [{x: 279, y: 303}, {x: 305, y: 288}, {x: 310, y: 315}],

    // Inside Outer-left tentacle
    [{x: 310, y: 315}, {x: 205, y: 578}, {x: 418, y: 844}, {x: 628, y: 851}],
    [{x: 628, y: 851}, {x: 628, y: 670}],

    [{x: 628, y: 670}, {x: 605, y: 667}, {x: 593, y: 662}],

    // Outside Inner-left tentacle
    [{x: 593, y: 662}, {x: 593, y: 815}],
    [{x: 593, y: 815}, {x: 314, y: 766}, {x: 180, y: 330}, {x: 506, y: 140}],

    // Point Inner-left tentacle
    [{x: 506, y: 140}, {x: 535, y: 142}, {x: 525, y: 171}],

    // Inside Inner-left tentacle
    [{x: 525, y: 171}, {x: 228, y: 341}, {x: 356, y: 707}, {x: 558, y: 767}],
    [{x: 558, y: 767}, {x: 558, y: 633}],

    // Head left
    [{x: 558, y: 633}, {x: 510, y: 620}, {x: 510, y: 547}, {x: 547, y: 535}],

    [{x: 547, y: 535}, {x: 545, y: 490}, {x: 538, y: 445}, {x: 475, y: 430}, {x: 481, y: 420}],
    [{x: 481, y: 420}, {x: 481, y: 385}],
    [{x: 481, y: 385}, {x: 501, y: 290}, {x: 609, y: 152}, {x: 679, y: 140}],

    // Eye left
    [{x: 576, y: 617}, {x: 594, y: 617}, {x: 611, y: 600}, {x: 611, y: 582}],
    [{x: 611, y: 582}, {x: 611, y: 564}, {x: 594, y: 547}, {x: 576, y: 547}],
    [{x: 576, y: 547}, {x: 558, y: 547}, {x: 541, y: 564}, {x: 541, y: 582}],
    [{x: 541, y: 582}, {x: 541, y: 600}, {x: 558, y: 617}, {x: 576, y: 617}]

    ],
    // controlPoints = [
    //   [{x: inputPoints[0][0].x, y: inputPoints[0][0].y}, {x: inputPoints[0][1].x, y: inputPoints[0][1].y}],
    //   [{x: (reflectLineX+(reflectLineX-inputPoints[0][0].x)), y: inputPoints[0][0].y},
    //    {x: (reflectLineX+(reflectLineX-inputPoints[0][1].x)), y: inputPoints[0][1].y}]
    // ],
    test_controlPoints = [],
    bezierCurves = [],
    line = d3.svg.line().x(x).y(y),
    flag = 0,
    stroke = d3.scale.category20b(),
    // Tell range how many curves to expect
    numberOfCurves = d3.range(0, controlPoints.length);
    //console.log(controlPoints);

// Intialize Bezier curve array with empty objects
for (var j=0; j<controlPoints.length; j++){
  bezierCurves.push({});
}

//Reflect half the points
for (var i=0; i<controlPoints.length/2; i++){
  for (var j=0; j<controlPoints[i].length; j++){
    controlPoints[i][j].x = (reflectLineX+(reflectLineX-controlPoints[i][j].x));
  }
}

var canvas = d3.select("body").selectAll("svg")
    .data(numberOfCurves)
  .enter().append("svg")
    // .attr("preserveAspectRatio", "xMinYMin meet")
    // .attr("viewBox", "0 0 1210 910")
    .attr("width", w + 2 * padding)
    .attr("height", h + 2 * padding)
  .append("g")
    .attr("transform", "translate(" + padding + "," + padding + ")");

update();

var last = 0;
d3.timer(function(elapsed) {
  if (t>1) flag = 1;
  if (t<0) flag = 0;
  if (flag === 0){
    t = (t + (elapsed - last) / 20000);
    last = elapsed;
  }
  if (flag === 1){
    // t = (t - (elapsed - last) / 20000);
    // last = elapsed;
    t = 1.0;
  }
  update();
});

function update() {
  var interpolation = canvas.selectAll("g")
      .data(function(d) { return getLevels(d, t); });
  interpolation.enter().append("g")
      .style("fill", color)
      .style("stroke", color);

  var circle = interpolation.selectAll("circle")
      .data(Object);
  circle.enter().append("circle")
      .attr("r", 2)
  circle
      .attr("class", "circle")
      .attr("cx", x)
      .attr("cy", y);

  var path = interpolation.selectAll("path")
      .data(function(d) { return [d]; });
  path.enter().append("path")
      .attr("class", "line")
      .attr("d", line);
  path.attr("d", line);

  var curve = canvas.selectAll("path.curve")
      .data(getCurve);
  curve.enter().append("path")
      .attr("class", "curve");
  curve.attr("d", line);

}

function interpolate(d, p) {
  if (arguments.length < 2) p = t;
  var r = [];
  for (var i=1; i<d.length; i++) {
    var d0 = d[i-1], d1 = d[i];
    r.push({x: d0.x + (d1.x - d0.x) * p, y: d0.y + (d1.y - d0.y) * p});
  }
  return r;
}

function getLevels(d, t_) {
  if (arguments.length < 2) t_ = t;
  var x = [controlPoints[d].slice(0, controlPoints[d].length)];
  for (var i=1; i<controlPoints[d].length; i++) {
    x.push(interpolate(x[x.length-1], t_));
  }
  return x;
}

function getCurve(d) {
  var curve = bezierCurves[d][bezierCurves[d].length];
  if (!curve) {
    curve = bezierCurves[d][bezierCurves[d].length] = [];
    for (var t_=0; t_<=1; t_+=delta) {
      var x = getLevels(d, t_);
      curve.push(x[x.length-1][0]);
    }
  }
  return [curve.slice(0, t / delta + 1)];
}

function x(d) { return d.x; }
function y(d) { return d.y; }
function color(d, i) {
  stroke(-i);
  return d.length > 1 ? stroke(i) : "red";
}
