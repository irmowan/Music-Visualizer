/**
 * Created by irmo on 16/10/13.
 */

var audio = document.getElementById('music');
var audioContext = new AudioContext();
var audioAnalyser = audioContext.createAnalyser();
var audioSource = audioContext.createMediaElementSource(audio);

audioAnalyser.fftSize = 512;
var freqByteData = new Uint8Array(audioAnalyser.frequencyBinCount);
audioSource.connect(audioAnalyser);
audioAnalyser.connect(audioContext.destination);

function getData() {
  audioAnalyser.getByteFrequencyData(freqByteData);
  return freqByteData;
}

function getFftSize() {
  return audioAnalyser.fftSize;
}
