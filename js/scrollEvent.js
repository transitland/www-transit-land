var ScrollEvent = (function(){

  var speed;
  var acc;
  var slides;
  var firstSlide;
  var slideH;
  var firstMove;

  var scrollm;
  var xpos;
  var highV;

  var init = function(){
    speed = 25;
    slides = document.getElementsByClassName('slide');
    firstSlide = document.getElementById("slide-1");
    slideH =  parseInt(window.getComputedStyle(firstSlide,null).getPropertyValue("height").replace("px",""));
    firstMove = false;

    var offsetPosition = window.getComputedStyle(firstSlide,null).getPropertyValue("background-position");
    var positions = offsetPosition.split(' ');
    scrollm = parseInt(positions[1]);
    xpos = positions[0];
    var secondSlide = document.getElementById("slide-2");
    highV = parseInt(window.getComputedStyle(secondSlide,null).getPropertyValue("background-position").split(' ')[1].replace('px',''));

  };

  var animateFirstSlide = function(){

    var scrolly = getScroll();
    var ypos = map_range(scrolly,0,scrollm,scrollm,highV);
    firstSlide.style.backgroundPosition = xpos +" " + ypos + "px" ;
  }

  var moveScroll = function(targetP){
    var realTarget;
    if(!firstMove){
      //realTarget = map_range(targetP, 0,window.innerHeight || document.body.clientHeight )
      (targetP < scroll)? speed = -5 : speed = 5;
    }

    if(Math.abs(targetP - getScroll()) > Math.abs(speed)){
      firstMove = true;
      window.scrollTo(0,scroll+speed);
      setTimeout(function(){
        moveScroll(targetP);
      },2);
    }else{
      window.scrollTo(0,targetP);
      firstMove = false;
      speed = 5;
      activateDots();
    }
  };

  var activateDots = function(){

    var i;
    var currTop = -50;
    for(i = 0; i < slides.length; i++){

      DotNavigation.changeDotDefault(i);

      var nextTop = slides[i].offsetTop + slideH/2;
      var scrollTop = getScroll();
      if(scrollTop > currTop && scrollTop <= nextTop){
        DotNavigation.changeDotActive(i);
      }
      currTop = nextTop;
    }
  }


  var getScroll = function(){
    scroll = window.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    return scroll;
  };

  var map_range = function(value, low1, high1, low2, high2) {
    if(value < high1) return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    else return high2;
  };

  return {
    init : init,
    moveScroll : moveScroll,
    activateDots : activateDots,
    animateFirstSlide : animateFirstSlide
  };

})();