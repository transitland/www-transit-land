function Animation(w,h){
 
  var canvas = $('<canvas class = />').attr({
      width : w,
      height :h
    });

  canvas.css({
    "vertical-align":"middle",
    "cursor":"pointer"
  });

  canvas.mouseenter(function(){
    if(!background.isThisRunning()){
      background.update();
      vehicle.staticUpdate();
    }
  });


  var bgImage = new Image();
  bgImage.src = "./images/bus_bg.png";
  var vehicleImage = new Image();
  vehicleImage.src = "./images/bus_1.png"

  var background = new sprite({
      context : $(canvas)[0].getContext('2d'),
      width : w,
      height: h,
      image : bgImage,
      imageHeight: 91,
      ticksPerFrame : 50,
      numberOfFrames : 20
  });

  var vehicle = new sprite({
      context : $(canvas)[0].getContext('2d'),
      width : w,
      height: h,
      imageWidth : 166,
      imageHeight : 63,
      image : vehicleImage,
      ticksPerFrame : 50,
      numberOfFrames : 20    
  });

  this.getCanvas = function(){
    return canvas;
  }

  this.render = function(){
    background.render();
    vehicle.staticRender();
  }
}
