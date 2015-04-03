function Animation(w,h,veh){

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
  var vehicle = veh;
  var nFrames = 78;

  this.initSprites = function(){

  var bgImage = new Image();
  bgImage.src = "./images/animation/"+vehicle+"_bg.png";

  $(bgImage).load(function(){
    background = new sprite({
      context : $(canvas)[0].getContext('2d'),
      width : w,
      height: h,
      speed:speed[vehicle],
      image : bgImage,
      imageHeight: 48,
      ticksPerFrame : 50,
      numberOfFrames : 78
    });

    background.render();

    var vehicleImage = new Image();
    vehicleImage.src="./images/animation/"+vehicle+"_1.png";
    $(vehicleImage).load(function(){
      vehicle = new sprite({
        context : $(canvas)[0].getContext('2d'),
        width : w,
        height: h,
        startPoint: startPoint[vehicle],
        imageWidth : assetWidth[vehicle],
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

  var assetWidth = {
    bike:46,
    bus:114,
    ferry:101,
    train:146
  };
  var startPoint = {
    bike:100,
    bus:0,
    ferry:60,
    train:200
  }
  var speed = {
    bike:-6,
    bus:6,
    ferry:6,
    train:-6
  }
}
