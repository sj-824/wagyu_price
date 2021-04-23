$(function() {

  var scrollTop = $(window).scrollTop();
  if(scrollTop > 460) {
    $('#page-top').css('display', 'block');
  }

  $(window).on('scroll', function() {
    scrollTop = $(this).scrollTop();
    if (scrollTop > 460) {
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });

  $('#page-top').on('click', function(event) {
    event.preventDefault();
    $('body,html').stop().animate({scrollTop: 0}, 'fast');
  });
});