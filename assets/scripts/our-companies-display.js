$(function () {
  $('#companies-select').change(function () {
    updateMobileViewCompanies($(this).val());
    updateDesktopViewCompanies($(this).val());
    updateBreadcrumbs($(this).val());
  });

  $('#companies-tabs-container .tab, .dropdown-content a').on('click', function () {
    var stripped = $(this).attr('id').substring(0, $(this).attr('id').length - 4);
    updateDesktopViewCompanies(stripped);
    updateMobileViewCompanies(stripped);
    updateBreadcrumbs(stripped);
  });

  $(document).ready(function() {

    var path = window.location.hash;
    console.log(path);

    switch(path) {
      case '#thorpe-design':
        $('#companies-select>option:eq(1)').prop('selected', true);
      break;
      case '#brighter-mechanical':
        $('#companies-select>option:eq(0)').prop('selected', true);
      break;
      case '#tfc-concrete':
        $('#companies-select>option:eq(2)').prop('selected', true);
      break;
    }


    $("[data-hash]").hide();
    var hash = window.location.hash;
    hash = hash.substr(1);

    if (hash.length === 0) {
      hash = $("[data-hash]").data('hash');
    }
    updateDesktopViewCompanies(hash);
    updateMobileViewCompanies(hash);
    updateBreadcrumbs(hash);
  });

  var updateMobileViewCompanies = function(hash) {
    $('.companies-section').hide();
    $('#' + hash).show();
  };

  var updateDesktopViewCompanies = function(hash) {
    $('#companies-tabs-container .tab').removeClass('active');
    $("#companies-tabs-container #" + hash + "-tab").addClass('active');
    $('.companies-section').hide();
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
      }, 1);
    }
  }
});