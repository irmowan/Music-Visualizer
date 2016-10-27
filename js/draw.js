/**
 * Created by irmo on 16/10/14.
 */

var canvas = document.getElementById('visualizer');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var particles = [];
var p, data, len, i;

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
const frequencyInterval = 5;
const initOpacity = 0.2;
const opacityRate = 0.03;
const sizeRate = 5;
const refreshRate = 15;


function draw() {
  ctx.save();
  data = getData();
  ctx.clearRect(0, 0, width, height);
  for (i = 0, len = data.length; i < len; i = i + frequencyInterval) {
    p = particles[i];
    if (p.size == 0) {
      p.size = data[i];
    } else {
      if (p.size < data[i]) {
        p.size += Math.floor((data[i] - p.size) / sizeRate);
        p.opacity = p.opacity + opacityRate;
        if (p.opacity > 1) {
          p.opacity = 1;
        }
      } else {
        p.size -= Math.floor((p.size - data[i]) / sizeRate);
        if (data[i] == 0) {
          p.opacity = 0;
        } else {
          p.opacity = p.opacity - opacityRate;
          if (p.opacity < 0) {
            p.opacity = 0;
            p.x = Math.random() * canvas.width;
            p.y = Math.random() * canvas.height;
          }
        }
      }
    }
    var color = p.color.replace('0)', p.opacity + ')');
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI, true);
    // ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

function initDraw() {
  var i, len = getFftSize() / 2;
  colorNum = colors.length;
  for (i = 0; i < len; i++) {
    particles[i] = {
      x: Math.random() * width,
      y: Math.random() * height,
      color: 'rgba(' + colors[Math.floor(Math.random() * colorNum)] + ', 0)',
      size: 0,
      opacity: Math.random() + initOpacity
    }
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
