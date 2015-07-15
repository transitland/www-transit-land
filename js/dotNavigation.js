
var DotNavigation = (function(){

  var lis;
  var activeColor;
  var defautlColor;

  var init =  function(){
    lis = document.getElementById('nav-dots').getElementsByTagName('li');
    activeColor = "#f7ae56";
    defautlColor = "#ccc";
    attachEvent();
  };

  var attachEvent = function(){
    for(i = 0; i < lis.length; i++){
      lis[i].addEventListener('mouseover',function(e){
        e.target.style.backgroundColor = activeColor;
      }.bind(this),false);

      lis[i].addEventListener('mouseout',function(e){
        e.target.style.backgroundColor = defautlColor;
      },false);

      lis[i].addEventListener('click',function(e){
        var aLink = e.target.getElementsByTagName('a')[0].getAttribute('href');
        aLink = aLink.replace("#","");
        var targetSlide = document.getElementById(aLink);
        var targetPos = targetSlide.offsetTop - 50;
        ScrollEvent.moveScroll(targetPos);
      },false);
    }
  };
  
  var changeDotActive = function(idx){
    lis[idx].style.backgroundColor = activeColor;
  }; 
  
  var changeDotDefault = function(idx){
    lis[idx].style.backgroundColor = defautlColor;
  };

  return {
    init : init,
    changeDotActive : changeDotActive,
    changeDotDefault : changeDotDefault,
  };

})();