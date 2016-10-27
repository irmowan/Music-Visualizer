/**
 * Created by irmo on 16/10/14.
 */

function playSwitch() {
  var audio = document.getElementById('music');
  if (audio.paused == true) {
    audio.play();
  } else {
    audio.pause();
  }
}

document.addEventListener('keyDown', function (e) {
  switch (e.keyCode) {
    case  32:
      playSwitch();
      break;
  }
});
