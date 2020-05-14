$('head').append(
  '<style>body{display:none;}'
  );
  $(window).on("load", function() {
  $('body').delay(100).fadeIn(500);
  });