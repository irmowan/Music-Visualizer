/**
 * Created by irmo on 16/10/14.
 */

var canvas = document.getElementById('visualizer');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var circles = [];
var p, data;

const colors = [
  '105, 210, 231',
  '27, 103, 107',
  '190, 242, 2',
  '235, 229, 77',
  '0, 205, 172',
  '22, 147, 165',
  '249, 212, 35',
  '255, 78, 80',
  '231, 32, 78',
  '12, 202, 186',
  '255, 0, 111'
];
const frequencyInterval = 8;
const initOpacity = 0.25;
const opacityRate = 0.02;
const sizeRate = 3;
const refreshRate = 25;
const sizeThreshold = 20;
const lifeThreshold = 150;
const re = /,[\d\s.]*\)/;

function updateCircle(c, diff, increase) {
  c.life++;
  if (increase && c.life < lifeThreshold) {
    c.size += Math.floor(diff) / sizeRate;
    c.opacity += opacityRate;
    if (c.opacity > 1) {
      c.opacity = 1;
    }
  }
  else {
    c.size -= Math.floor(diff) / sizeRate;
    if (c.size < 0) {
      c.size = 0;
    }
    c.opacity -= opacityRate;
    if (c.opacity < 0) {
      c.opacity = 0;
    }
  }
}

function draw() {
  ctx.save();
  data = getData();
  ctx.clearRect(0, 0, width, height);
  for (var i = 0, len = data.length; i < len; i += frequencyInterval) {
    var circle = new Object(circles[i]);
    if (circle.size == 0) {
      circle = initCircle(data[i]);
    }
    else {
      updateCircle(circle, Math.abs(data[i] - circle.size), circle.size < data[i]);
    }
    circles[i] = circle;
    if (circle.size > sizeThreshold) {
      ctx.fillStyle = circle.color.replace(re, ', ' + circle.opacity + ')');
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI, true);
      ctx.fill();
    }
  }
  ctx.restore();
}

function initCircle(size) {
  var c = {
    x: Math.random() * width,
    y: Math.random() * height,
    color: 'rgba(' + colors[Math.floor(Math.random() * colors.length)] + ', 0)',
    size: size,
    opacity: Math.random() / 2 + initOpacity,
    life: 0
  };
  return c;
}

function initDraw() {
  var len = getFftSize() / 2;
  for (var i = 0; i < len; i++) {
    circles[i] = initCircle(0);
  }
}

function beginDraw() {
  console.log('Begin draw.');
  initDraw();
  setInterval(function () {
    console.log('drawing...');
    draw();
  }, refreshRate);
}
