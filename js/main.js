/**
 * Created by irmo on 16/10/14.
 */

audio = document.getElementById('music');

function playSwitch() {
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
