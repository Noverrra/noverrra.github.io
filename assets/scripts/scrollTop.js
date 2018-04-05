$(function () {
  var $scrollTop = $(".scrollTop");

  function foldNav() {
    $('.main-nav').css('height','45px');
    $('.breadcrumb').css('height','35px');
    $('.arrow-right').css({'border-top-width':'17.5px','border-bottom-width':'17.5px'});
    $('.dropdown i').css({'right':'25px', 'left':'initial','bottom':'initial', 'top':'50%', 'transform':'translateY(-50%)', 'width':'5px', 'display':'inline'});
  }

  function unfoldNav() {
    $('.main-nav').css('height','90px');
    $('.breadcrumb').css('height','50px');
    $('.arrow-right').css({'border-top-width':'25px','border-bottom-width':'25px'});
    $('.dropdown i').css({'right':'initial', 'top':'initial', 'left':'0', 'bottom':'0', 'width':'100%', 'transform':'none', 'display':'inline-block'});
  }

  $(window).scroll(function() {
    if ($(document).scrollTop() > 300) {
      $scrollTop.show();
      foldNav();
    } else if ($(document).scrollTop() < 200) {
      unfoldNav();
      $scrollTop.hide();
    }
  });


  $($scrollTop).click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
});