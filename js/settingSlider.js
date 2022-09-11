$(document).ready(function(){
  $('.smollImg').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.bigSlider'
  });
  $('.bigSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.smollImg'
  });
});