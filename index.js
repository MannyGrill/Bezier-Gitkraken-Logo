var w = 1200,
    h = 900,
    t = 0.0,
    delta = 0.005,
    padding = 0,
    xOffset = 150,
    yOffset = 10,
    reflectLineX = 679-xOffset,
    controlPoints = [

    // Outside Outer-left tentacle
    [{x: 661-xOffset, y: 675-yOffset}, {x: 661-xOffset, y: 892-yOffset}],
    [{x: 661-xOffset, y: 892-yOffset}, {x: 380-xOffset, y: 888-yOffset}, {x: 163-xOffset, y: 578-yOffset}, {x: 279-xOffset, y: 303-yOffset}],

    // Point Outer-left tentacle
    [{x: 279-xOffset, y: 303-yOffset}, {x: 305-xOffset, y: 288-yOffset}, {x: 310-xOffset, y: 315-yOffset}],

    // Inside Outer-left tentacle
    [{x: 310-xOffset, y: 315-yOffset}, {x: 205-xOffset, y: 578-yOffset}, {x: 418-xOffset, y: 844-yOffset}, {x: 628-xOffset, y: 851-yOffset}],
    [{x: 628-xOffset, y: 851-yOffset}, {x: 628-xOffset, y: 670-yOffset}],

    [{x: 628-xOffset, y: 670-yOffset}, {x: 605-xOffset, y: 667-yOffset}, {x: 593-xOffset, y: 662-yOffset}],

    // Outside Inner-left tentacle
    [{x: 593-xOffset, y: 662-yOffset}, {x: 593-xOffset, y: 815-yOffset}],
    [{x: 593-xOffset, y: 815-yOffset}, {x: 314-xOffset, y: 766-yOffset}, {x: 180-xOffset, y: 330-yOffset}, {x: 506-xOffset, y: 140-yOffset}],

    // Point Inner-left tentacle
    [{x: 506-xOffset, y: 140-yOffset}, {x: 535-xOffset, y: 142-yOffset}, {x: 525-xOffset, y: 171-yOffset}],

    // Inside Inner-left tentacle
    [{x: 525-xOffset, y: 171-yOffset}, {x: 228-xOffset, y: 341-yOffset}, {x: 356-xOffset, y: 707-yOffset}, {x: 558-xOffset, y: 767-yOffset}],
    [{x: 558-xOffset, y: 767-yOffset}, {x: 558-xOffset, y: 633-yOffset}],

    // Head left
    [{x: 558-xOffset, y: 633-yOffset}, {x: 510-xOffset, y: 620-yOffset}, {x: 510-xOffset, y: 547-yOffset}, {x: 547-xOffset, y: 535-yOffset}],

    [{x: 547-xOffset, y: 535-yOffset}, {x: 545-xOffset, y: 490-yOffset}, {x: 538-xOffset, y: 445-yOffset}, {x: 475-xOffset, y: 430-yOffset}, {x: 481-xOffset, y: 420-yOffset}],
    [{x: 481-xOffset, y: 420-yOffset}, {x: 481-xOffset, y: 385-yOffset}],
    [{x: 481-xOffset, y: 385-yOffset}, {x: 501-xOffset, y: 290-yOffset}, {x: 609-xOffset, y: 152-yOffset}, {x: 679-xOffset, y: 140-yOffset}],

    // Eye left
    [{x: 576-xOffset, y: 617-yOffset}, {x: 594-xOffset, y: 617-yOffset}, {x: 611-xOffset, y: 600-yOffset}, {x: 611-xOffset, y: 582-yOffset}],
    [{x: 611-xOffset, y: 582-yOffset}, {x: 611-xOffset, y: 564-yOffset}, {x: 594-xOffset, y: 547-yOffset}, {x: 576-xOffset, y: 547-yOffset}],
    [{x: 576-xOffset, y: 547-yOffset}, {x: 558-xOffset, y: 547-yOffset}, {x: 541-xOffset, y: 564-yOffset}, {x: 541-xOffset, y: 582-yOffset}],
    [{x: 541-xOffset, y: 582-yOffset}, {x: 541-xOffset, y: 600-yOffset}, {x: 558-xOffset, y: 617-yOffset}, {x: 576-xOffset, y: 617-yOffset}],


    // -----Points to be reflected-----


    // Outside Outer-left tentacle
    [{x: 661-xOffset, y: 675-yOffset}, {x: 661-xOffset, y: 892-yOffset}],
    [{x: 661-xOffset, y: 892-yOffset}, {x: 380-xOffset, y: 888-yOffset}, {x: 163-xOffset, y: 578-yOffset}, {x: 279-xOffset, y: 303-yOffset}],

    // Point Outer-left tentacle
    [{x: 279-xOffset, y: 303-yOffset}, {x: 305-xOffset, y: 288-yOffset}, {x: 310-xOffset, y: 315-yOffset}],

    // Inside Outer-left tentacle
    [{x: 310-xOffset, y: 315-yOffset}, {x: 205-xOffset, y: 578-yOffset}, {x: 418-xOffset, y: 844-yOffset}, {x: 628-xOffset, y: 851-yOffset}],
    [{x: 628-xOffset, y: 851-yOffset}, {x: 628-xOffset, y: 670-yOffset}],

    [{x: 628-xOffset, y: 670-yOffset}, {x: 605-xOffset, y: 667-yOffset}, {x: 593-xOffset, y: 662-yOffset}],

    // Outside Inner-left tentacle
    [{x: 593-xOffset, y: 662-yOffset}, {x: 593-xOffset, y: 815-yOffset}],
    [{x: 593-xOffset, y: 815-yOffset}, {x: 314-xOffset, y: 766-yOffset}, {x: 180-xOffset, y: 330-yOffset}, {x: 506-xOffset, y: 140-yOffset}],

    // Point Inner-left tentacle
    [{x: 506-xOffset, y: 140-yOffset}, {x: 535-xOffset, y: 142-yOffset}, {x: 525-xOffset, y: 171-yOffset}],

    // Inside Inner-left tentacle
    [{x: 525-xOffset, y: 171-yOffset}, {x: 228-xOffset, y: 341-yOffset}, {x: 356-xOffset, y: 707-yOffset}, {x: 558-xOffset, y: 767-yOffset}],
    [{x: 558-xOffset, y: 767-yOffset}, {x: 558-xOffset, y: 633-yOffset}],

    // Head left
    [{x: 558-xOffset, y: 633-yOffset}, {x: 510-xOffset, y: 620-yOffset}, {x: 510-xOffset, y: 547-yOffset}, {x: 547-xOffset, y: 535-yOffset}],

    [{x: 547-xOffset, y: 535-yOffset}, {x: 545-xOffset, y: 490-yOffset}, {x: 538-xOffset, y: 445-yOffset}, {x: 475-xOffset, y: 430-yOffset}, {x: 481-xOffset, y: 420-yOffset}],
    [{x: 481-xOffset, y: 420-yOffset}, {x: 481-xOffset, y: 385-yOffset}],
    [{x: 481-xOffset, y: 385-yOffset}, {x: 501-xOffset, y: 290-yOffset}, {x: 609-xOffset, y: 152-yOffset}, {x: 679-xOffset, y: 140-yOffset}],

    // Eye left
    [{x: 576-xOffset, y: 617-yOffset}, {x: 594-xOffset, y: 617-yOffset}, {x: 611-xOffset, y: 600-yOffset}, {x: 611-xOffset, y: 582-yOffset}],
    [{x: 611-xOffset, y: 582-yOffset}, {x: 611-xOffset, y: 564-yOffset}, {x: 594-xOffset, y: 547-yOffset}, {x: 576-xOffset, y: 547-yOffset}],
    [{x: 576-xOffset, y: 547-yOffset}, {x: 558-xOffset, y: 547-yOffset}, {x: 541-xOffset, y: 564-yOffset}, {x: 541-xOffset, y: 582-yOffset}],
    [{x: 541-xOffset, y: 582-yOffset}, {x: 541-xOffset, y: 600-yOffset}, {x: 558-xOffset, y: 617-yOffset}, {x: 576-xOffset, y: 617-yOffset}]

    ],
    bezierCurves = [],
    line = d3.svg.line().x(x).y(y),
    flag = 0,
    stroke = d3.scale.category20b(),
    // Tell range how many curves to expect
    numberOfCurves = d3.range(0, controlPoints.length);

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
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 1100 910")
    //.attr("width", w + 2 * padding)
    //.attr("height", h + 2 * padding)
  .append("g")
    .attr("transform", "translate(" + padding + "," + padding + ")");

update();

var last = 0;
d3.timer(function(elapsed) {
  if (t>1) flag = 1;
  if (t<0) flag = 0;
  if (flag === 0){
    // To slow down the animation, simply increment the divide value
    t = (t + (elapsed - last) / 20000);
    last = elapsed;
  }
  if (flag === 1){
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
  // The color array will determine the color of the curve depending of the order, i.e. a curve of order 5 will utilize the array
  // while an order of >5 will utilize the array but then input a color based on "i" (No need to add additional colors since order 5
  // is the highest order curve used). The HEX value at the end is the color of the point that moves. I recommend changing the color
  // of the curve in main.css (in .curve) to match this (i.e. the curve and dot should be the same color)
  return d.length > 1 ? ["#393945", "#6178bb", "#6178bb", "#6178bb", "#6178bb"][i] : "#149287";
}
