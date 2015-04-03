//sprite
function sprite (options) {

  var that = {};
  var frameIndex = 0;
  var ticksPerFrame = options.ticksPerFrame || 0;
  var numberOfFrames = options.numberOfFrames || 1;
  var startPoint = options.startPoint || 0;
  var frameIndex = 0;
  var speed = options.speed|| 6;
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
    var startP;
    if(speed<0)  startP= 800 + speed*frameIndex;
    else startP =  (speed*frameIndex)+315;
    that.context.clearRect(0, 0, that.width, that.height);
    that.context.drawImage(
    that.image,
    startP,0, that.width,that.height,
    0,0,that.width,that.height
    );
  }

  that.staticRender = function(){
    that.context.drawImage(
    that.image,
    0,0, that.imageWidth,that.imageHeight,
    startPoint,0,that.imageWidth,that.imageHeight
    );
  }

  return that;
}

