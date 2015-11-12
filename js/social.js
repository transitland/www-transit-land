// SOCIAL SHARING BUTTONS
//
// written by Lou Huang, edited by Hanbyul Jo  based on Ridiculously Responsive Social Sharing Buttons)
// Some of this functionality is borrowed from RRSSB
// (Ridiculously Responsive Social Sharing Buttons) but
// stripped down because we really don't need all of it
// --------------------------------------------------------
var socialHandler = (function () {
  'use strict'

  // Borrowed from rrssb
  function popupCenter (url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screen.left
    var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screen.top

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height

    var left = ((width / 2) - (w / 2)) + dualScreenLeft
    var top = ((height / 3) - (h / 3)) + dualScreenTop

    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)

    // Puts focus on the newWindow
    if (window.focus) {
      newWindow.focus()
    }
  }

  function attachClickHandlers (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault()
      popupCenter(el.href, el.title, 580, 470)
    })
  }

  function init () {
    var els = document.getElementsByClassName('social-popup')
    for (var i = 0, j = els.length; i < j; i++) {
      attachClickHandlers(els[i])
    }
  }

  function updateNewButton(element) {
    attachClickHandlers(element);
  }

  init();

  return {
    updateNewButton: updateNewButton
  };

})()