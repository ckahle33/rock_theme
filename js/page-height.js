/**
 * File page-height.js.
 *
 */

( function($) {
  var pageHeight, fullBg;

  pageHeight = window.outerHeight;  
  fullBg = document.getElementsByClassName('full-bg');

  fullBg[0].style.height = pageHeight + 'px;' ;

})();