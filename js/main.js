$(document).ready(function(){
  if($(document).innerWidth() > 768){
    var navDefault = $("#nav-menu-bar").offset().top - parseInt($("#nav-menu-bar").css('margin-top'));
    fixNavigation(navDefault);

    $("#index-1 .row").each(function(){
      var thisW = $(this).width();
      var totalW = 0;
      $(this).find("h2").each(function(){ 
        totalW += $(this).width();
      });
      var canvasW = thisW - totalW - 30;
      //image height : 48
      var canvasH = 48;

      $(this).find("h2").each(function(){ 
        totalW += $(this).width();
      });
      var vehicle = $(this).attr("data-item");
      var ani = new Animation(canvasW,canvasH,vehicle);
      var canv = ani.getCanvas();
      $(this).find(".before-canvas").append(canv).each(function(){
        ani.initSprites();
      });
    });
    
    $(window).scroll(function(){
       fixNavigation(navDefault);
    });
  }else{
    
    var thisW = $("#index-1").width();

    var canvasW = thisW - 30;
    var canvasH = 48;

    var ani = new Animation(canvasW,canvasH,"bus");
    var canv = ani.getCanvas();
    canv.css({"margin-top":"50px"});
    $(this).find("#index-1 .mobile-before-canvas").append(canv).each(function(){
      ani.initSprites();
    });
  }
});
  