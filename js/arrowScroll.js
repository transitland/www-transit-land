var ArrowScroll = (function(){

  var arrow; 
  var scrollSVG;
  var scrollText;

  var init = function(){
    arrow = document.getElementById('arrow');
    scrollSVG = document.getElementById('scroll_svg');
    scrollText = document.getElementById('scroll_down');
    scrollSVG.style.display = 'block';
    scrollText.style.display = 'none';
    
    attachEvent();
  };

  var attachEvent = function(){
    arrow.addEventListener("mouseover",function(event){
        scrollSVG.style.display = 'none';
        scrollText.style.display = 'block';
    }.bind(this),false);
    
    arrow.addEventListener("mouseout",function(event){
      scrollSVG.style.display = 'block';
      scrollText.style.display = 'none';
    }.bind(this),false);

    arrow.addEventListener("click",function(event){
      ScrollEvent.moveScroll(document.getElementById("slide-2").offsetTop);
      arrow.style.display = "none";
    }.bind(this),false);
    };
    
    return {
      init : init
    };
})();

