$(document).ready(function(){
  fixNavigation();
  var containerH = $("#index-1 .container").height();
  var contentH =$("#index-1 .rows-wrapper").height();
  var leftSpace = containerH - contentH;

  var rowsMargin = leftSpace*1/2;
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
    var canvasH = 48;//(contentH/4);

    $(this).css({"padding-top":(rowMargin/2),
                "padding-bottom":(rowMargin/2)});

    $(this).find("h2").each(function(){ 
      totalW += $(this).width();
    });
    
    var ani = new Animation(canvasW,canvasH);
   
    var canv = ani.getCanvas();
    $(this).find(".before-canvas").append(canv).each(function(){
      //wait until canvas is set
      setTimeout(ani.render,100);
    });
  });
  
  $(window).scroll(function(){
     fixNavigation();
  });

});
  