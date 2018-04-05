$(function () {
  $('#about-select').change(function () {
    updateMobileViewAbout($(this).val());
    updateDesktopViewAbout($(this).val());
    updateBreadcrumbs($(this).val());
  });

  $('#about-tabs-container .tab').on('click', function(){
    var stripped = $(this).attr('id').substring(0, $(this).attr('id').length - 4);
    updateDesktopViewAbout(stripped);
    updateMobileViewAbout(stripped);
    updateBreadcrumbs(stripped);
  });

  var updateDesktopViewAbout = function(hash) {
    $('.tab').removeClass('active');
    $('#' + hash + '-tab').addClass('active');
    $('.about-section').hide();
    $('#' + hash).show();
  };

  var updateMobileViewAbout = function(hash) {
    $('.about-section').hide();
    $('#' + hash).show();
  };

  var updateBreadcrumbs = function(hash) {
    $("[data-hash]").hide();
    $("[data-hash='" + hash + "']").show();
    window.location.hash = '#' + hash;
    // Prevents scrolling to the anchor on hash change
    if (location.hash) {
      window.scrollTo(0, 0);
      setTimeout(function() {

        window.scrollTo(0, 0);
      }, 0);
    }
  };

  $(document).ready(function() {
    $("[data-hash]").hide();
    var hash = window.location.hash;
    hash = hash.substr(1);

    if (hash.length === 0) {
      hash = $("[data-hash]").data('hash');
    }
    updateDesktopViewAbout(hash);
    updateMobileViewAbout(hash);
    updateBreadcrumbs(hash);
  });

  $('.read-more').on('click', function(){
    var hiddenParagraphs = $(this).siblings('p.hidden');
    hiddenParagraphs.removeClass('hidden');
    $(this).addClass('hidden');
  });

});