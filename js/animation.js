var Animation = (function() {
  var vehicleAni = {
    'bus': 'moveToRight',
    'ferry': 'moveToRight',
    'bike': 'moveToLeft',
    'train': 'moveToLeft'
  }

  function _init() {
    addHoverEvent();
  }

  function addHoverEvent() {
    $('.animation').hover(function() {
      var thisAnimation = $(this);
      var thisId = thisAnimation.attr('id');
      if(!thisAnimation.hasClass(vehicleAni[thisId])) {
        thisAnimation.addClass(vehicleAni[thisId]);
      } else {
        if(thisAnimation.css('backgroundPosition') == "0% 0%") {
          thisAnimation.removeClass(vehicleAni[thisId]);

        }
      }
    })
  }

  return { init: _init }

})();
