"use strict";

window.onscroll = function () {
  if (window.scrollY > 10) {
    $(".header-section").addClass('nav-active');
  } else {
    $(".header-section").removeClass('nav-active');
  }
}; // mob menu


$(".ham-lines").click(function () {
  $(".list-items-section-mob").toggleClass("show-list-mob");
  $(".t-line").toggleClass("anim-line");
  $(".b-line").toggleClass("anim-line20");
  $(".l-1").toggleClass("l-1-n");
  $(".l-3").toggleClass("l-2-n");
  $(".l-2").toggleClass("hide-line");
});
$(".dropdown-mob").each(function () {
  $(this).click(function () {
    $(".mob-drop-down-menu").toggleClass("mob-drop-down-menu-show");
  });
}); // section display

$(".video-btn").click(function (e) {
  e.preventDefault();
  $(".video-section").removeClass("section-display");
  $(".photo-section").addClass("section-display");
});
$(".photo-btn").click(function (e) {
  e.preventDefault();
  $(".video-section").addClass("section-display");
  $(".photo-section").removeClass("section-display");
});