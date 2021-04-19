$(function() {
  $('#page-top').on('click', function(event) {
    event.preventDefault();
    $('body,html').stop().animate({scrollTop: 0}, 'fast');
  })
})