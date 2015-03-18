$(document).ready(function(){
  fixNavigation();

  $(window).scroll(function(){
     fixNavigation();
  });
  
  makeSpaceForImage();
  

  for(var i =0; i<anis.length; i++){
    anis[i].render();
  }
  makeLoop();

});

// navbar-fixed-top 

var anis = [];
function fixNavigation(){
    if( $(window).scrollTop()> ($("#nav-menu-bar").offset().top - parseInt($("#nav-menu-bar").css('margin-top')) )  && !$("#nav-menu-bar").hasClass("navbar-fixed-top")){
      $("#nav-menu-bar").addClass("navbar-fixed-top");
      $("#nav-menu-helper").addClass("nav-helper");
    }else if($(window).scrollTop() == 0){
      $('#nav-menu-bar').removeClass('navbar-fixed-top');
      $("#nav-menu-helper").removeClass("nav-helper");
    }
}

function makeSpaceForImage(){

  var containerH = $("#index-1 .container").height();
  var contentH =$("#index-1 .rows-wrapper").height();
  var leftSpace = containerH - contentH;
  
  var rowsMargin = leftSpace;
  var rowMargin = rowsMargin/$("#index-1 .row").length;
  
  var containerMargin = (leftSpace - rowsMargin)/2;

  $("#index-1 .rows-wrapper").css({"margin-top":containerMargin,
                                    "margin-bottom":containerMargin});
  
  $("#index-1 .row").each(function(){
    var thisW = $(this).width();
    var totalW = 0;

    $(this).find("h2").each(function(){ 
      totalW += $(this).width();
    });

    var canvasW = thisW - totalW - 30;
    var canvasH = (rowMargin*3/4 + contentH/4);

    var canvas = $('<canvas />').attr({
      width : canvasW,
      height :canvasH
    });

    $(this).css({"margin-top":(rowMargin/8),
                "margin-bottom":(rowMargin/8)});

    canvas.css({
      "vertical-align":"middle"
    })
    var ctx = $(canvas)[0].getContext('2d');
    $(this).find(".before-canvas").append(canvas);
    var ani = new Animation(ctx,canvasW,canvasH);
    anis.push(ani);
    
  });
}

function makeLoop () {

  var aniID =window.requestAnimationFrame(makeLoop);
  
  for(var i =0; i<anis.length; i++){
    anis[i].render();
    anis[i].update();
  }

}

function Animation(ctx,w,h){
 
  var bgImage = new Image();
  bgImage.src = "./images/bus_bg.png";
  var vehicleImage = new Image();
  var aniID; 
  vehicleImage.src = "./images/bus_1.png"
  
  var background = new sprite({
      context : ctx,
      width : w,
      height: h,
      image : bgImage,
      vImage : vehicleImage,
      ticksPerFrame : 5,
      numberOfFrames : 20,
      loop : true
    });
    
  this.render = function(){
    background.render();
  }
  
  this.update = function(){
    background.update();
  }

  var loop = function(){
        this.render();
    this.update();
  }

}


function sprite (options) {
        
    var that = {};
    var frameIndex = 0;
    var tickCount = 0;
    var ticksPerFrame = options.ticksPerFrame || 0;
    var numberOfFrames = options.numberOfFrames || 1;
    var frameIndex = 0;
    var speed = 5;
          
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.vImage = options.vImage;
    that.loop = options.loop;
    that.image = options.image;
    

    that.update = function(){
      tickCount +=1;
      if (tickCount > ticksPerFrame){
        tickCount = 0;
        if (frameIndex < numberOfFrames - 1) {  
          // Go to the next frame
          frameIndex += 1;
        }else if(that.loop){
          frameIndex = 0;
        }
      }
    }

    that.render = function(){
      that.context.clearRect(0, 0, that.width, that.height);

      that.context.drawImage(
        that.image,
        speed*frameIndex,0, speed*frameIndex+that.width,91,
        0,0,that.width,that.height
      );

      that.context.drawImage(
        that.vImage,
        0,0,166,63,
        20,that.height-63,166,63
      );
     
    }
    return that;
}

