 
  var boot = new Audio('dance.mp3');
  boot.currentTime = 0.75;
  var first = true;
  document.onclick = function(){
    if(first == true) boot.play()
      first = false;
  }

  var working = new Audio('dance.mp3'); 
  if (typeof working.loop == 'boolean')
  {
    working.loop = true;
  }
  else
  {
    working.addEventListener('ended', function() {
      this.currentTime = 0;
      this.volume = 1
      this.play();
      fadeIn = setInterval(function () {
        fadePoint = 1;
        if ((this.currentTime <= fadePoint) && (this.volume != 1.0)) {
          this.volume += 0.1;
        }
        if (this.volume === 1.0) {
          clearInterval(fadeIn);
        }
      }, 200);
      fadeOut = setInterval(function () {
        fadePoint = this.duration - 1;
        if ((this.currentTime >= fadePoint) && (this.volume != 0.0)) {
          this.volume -= 0.1;
        }
        if (this.volume === 0.0) {
          clearInterval(fadeOut);
        }
      }, 200);
    }, false);
  }
  boot.addEventListener('ended', function() {working.play();}, false)



  function getSoundAndFadeAudio (audiosnippetId) {

    var sound = document.getElementById(audiosnippetId);

      // Set the point in playback that fadeout begins. This is for a 1 second fade out.
      var fadePoint = sound.duration - 1; 

      var fadeAudio = setInterval(function () {

          // Only fade if past the fade out point or not at zero already
          if ((sound.currentTime >= fadePoint) && (sound.volume != 0.0)) {
            sound.volume -= 0.1;
          }
          // When volume at zero stop all the intervalling
          if (sound.volume === 0.0) {
            clearInterval(fadeAudio);
          }
      }, 200);

  }
 