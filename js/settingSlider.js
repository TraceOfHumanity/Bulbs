$(document).ready(function(){
  $('.smollImg').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.bigSlider'
  });
  $('.bigSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.smollImg'
  });
});