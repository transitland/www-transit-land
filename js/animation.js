function Animation(w,h){

  var canvas = $('<canvas class = />').attr({
    width : w,
    height :h
  });

  canvas.css({
    "vertical-align":"baseline",
    "cursor":"pointer"
  });

  canvas.mouseenter(function(){
    if(!background.isThisRunning()){
      background.update();
      vehicle.staticUpdate();
    }
  });


  var background;
  var vehicle;

  this.initSprites = function(){

  var bgImage = new Image();
  bgImage.src = "./images/bus_bg.png";

  $(bgImage).load(function(){
    background = new sprite({
      context : $(canvas)[0].getContext('2d'),
      width : w,
      height: h,
      image : bgImage,
      imageHeight: 48,
      ticksPerFrame : 50,
      numberOfFrames : 78
    });

    background.render();

    var vehicleImage = new Image();
    vehicleImage.src="./images/bus_1.png";
    $(vehicleImage).load(function(){
      vehicle = new sprite({
        context : $(canvas)[0].getContext('2d'),
        width : w,
        height: h,
        imageWidth : 114,
        imageHeight : 48,
        image : vehicleImage,
        ticksPerFrame : 50,
        numberOfFrames : 78    
      });
    vehicle.staticRender();
    });
  });

  }

  this.getCanvas = function(){
    return canvas;
  }

  this.render = function(){
    background.render();
    vehicle.staticRender();
  }
}
