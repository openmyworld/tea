$(document).ready(function() {
  var scrollTop = $('.top');

  $(window).scroll(function() {
    var topPos = $(this).scrollTop();
    
    if (topPos > 20) {
      $(scrollTop).show();
    }
    else {
      $(scrollTop).hide();
    }
  });

  $(scrollTop).click(function() {
    $(window).scrollTop(0);
  });

  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.nav').slideToggle();
    $('body').toggleClass('locked');
  });
});