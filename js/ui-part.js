function fixNavigation(c){
    if( $(window).scrollTop()>  defaultValue && !$("#nav-menu-bar").hasClass("navbar-fixed-top")){
      $("#nav-menu-bar").addClass("navbar-fixed-top");
      $("#nav-menu-helper").addClass("nav-helper");
    }
    if($(window).scrollTop() < defaultValue){
      console.log("hoi");
      if($('#nav-menu-bar').hasClass('navbar-fixed-top')) $('#nav-menu-bar').removeClass('navbar-fixed-top');
      if($('#nav-menu-helper').hasClass('nav-helper')) $("#nav-menu-helper").removeClass("nav-helper");
    }
}