/**
 * Created by irmo on 16/10/14.
 */

function onFileSelect() {
  var file = document.getElementById('input-file').files[0];
  document.getElementById('music').src = URL.createObjectURL(file);
  beginDraw();
}

function playSwitch() {
  var audio = document.getElementById('music');
  if (audio.paused == true) {
    audio.play();
  } else {
    audio.pause();
  }
}

document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 32:
      console.log('Key down: space.');
      playSwitch();
      break;
  }
});
