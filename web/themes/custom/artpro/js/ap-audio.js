// For toggling featured audio in the content header of posts.
//var myAudio = document.getElementById("featured-audio-player");
var myAudio = document.querySelector('#feature-audio > audio')
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
  document.getElementById("audio-toggle").classList.add("pause");
};
myAudio.onpause = function() {
  isPlaying = false;
  document.getElementById("audio-toggle").classList.remove("pause");
};

myAudio.onended = function() {
    document.getElementById("audio-toggle").classList.remove("pause");
};
