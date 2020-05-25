$(document).ready(function () {
  $('#modalOne').on('click', function () {
    $('#loginModal').modal({
      toggle: true,
    });
  });
  $('#modalTwo').on('click', function () {
    $('#reserveModal').modal({
      toggle: true,
    });
  });

  $('.close').on('click', function () {
    var idModal = $(this).parent().parent().parent().parent().attr('id');
    $('#' + idModal).modal('hide');
  });

  $('#mycarousel').carousel({ interval: 2000 });
  $('#carouselButton').click(function () {
    if ($('#carouselButton').children('span').hasClass('fa-pause')) {
      $('#mycarousel').carousel('pause');
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').children('span').addClass('fa-play');
    } else {
      $('#mycarousel').carousel('cycle');
      $('#carouselButton').children('span').removeClass('fa-play');
      $('#carouselButton').children('span').addClass('fa-pause');
    }
  });
});
