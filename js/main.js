$(document).ready(function () {
  "use strict";
  $(".header__mobile_btn").click(function () {
    $(this).toggleClass("active");
    $(".header__mobile_nav").toggleClass("active");
    $(".header__modal").toggleClass("active");
  });

  $(".header__modal").click(function () {
    $(this).removeClass("active");
    $(".header__mobile_btn").removeClass("active");
    $(".header__mobile_nav").removeClass("active");
  });

  $(".categories__main_slider").slick({
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    customPaging: function (slider, i) {
      return '<a class="dot"></a>';
    },
  });

  $(".product__item .drop h5").click(function () {
    $(this).parent().toggleClass("active");
  });

  $(".description_slider .slider").slick({
    prevArrow: $(".btns .prev"),
    nextArrow: $(".btns .next"),
    slidesToShow: 1,
  });

  $(".sale__slider").slick({
    prevArrow: $(".sale .btns .prev"),
    nextArrow: $(".sale .btns .next"),
    slidesToShow: 3,
  });
});
