$(document).ready(function() {
  if($(document).innerWidth() > 767) {
    var navDefault = $("#nav-menu-bar").offset().top - parseInt($("#nav-menu-bar").css('margin-top'));
    fixNavigation(navDefault);
    $(window).scroll(function() {
       fixNavigation(navDefault);
    });
  }
});