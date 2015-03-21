function fixNavigation(){
    if( $(window).scrollTop()> ($("#nav-menu-bar").offset().top - parseInt($("#nav-menu-bar").css('margin-top')) )  && !$("#nav-menu-bar").hasClass("navbar-fixed-top")){
      $("#nav-menu-bar").addClass("navbar-fixed-top");
      $("#nav-menu-helper").addClass("nav-helper");
    }else if($(window).scrollTop() == 0){
      $('#nav-menu-bar').removeClass('navbar-fixed-top');
      $("#nav-menu-helper").removeClass("nav-helper");
    }
}