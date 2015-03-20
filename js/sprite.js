//sprite
function sprite (options) {

  var that = {};
  var frameIndex = 0;
  var ticksPerFrame = options.ticksPerFrame || 0;
  var numberOfFrames = options.numberOfFrames || 1;
  var frameIndex = 0;
  var speed = 5;
  var started = false;
      
  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.imageWidth = options.imageWidth || options.width;
  that.imageHeight = options.imageHeight || options.height;
  that.image = options.image;

  that.update = function(){
    
    if (frameIndex < numberOfFrames - 1) {  
      // Go to the next frame
      frameIndex += 1;
    }
    that.render();
    if(frameIndex < numberOfFrames - 1){
      setTimeout(that.update,ticksPerFrame);
    }
    else frameIndex = 0;
  }
  that.staticUpdate = function(){
    if (frameIndex < numberOfFrames - 1) {  
      // Go to the next frame
      frameIndex += 1;
    }
    that.staticRender();
    if(frameIndex < numberOfFrames - 1){
      setTimeout(that.staticUpdate,ticksPerFrame);
    }
    else frameIndex = 0;
  }

  that.isThisRunning = function(){
    if(frameIndex === 0) return false;
    else return true;
  }

  that.render = function(){
    that.context.clearRect(0, 0, that.width, that.height);
    that.context.drawImage(
    that.image,
    speed*frameIndex,0, speed*frameIndex+that.imageWidth,that.imageHeight,
    0,0,that.imageWidth,that.height
    );
  }
  
  that.staticRender = function(){
    console.log("static reunder");
    that.context.drawImage(
    that.image,
    0,0, that.imageWidth,that.imageHeight,
    0,0,that.imageWidth,that.height
    );
  }

  return that;
}

