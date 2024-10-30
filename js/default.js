// On Scroll Add Class
$(window).scroll(function () {
  if ($(this).scrollTop() > 59) {
    $(".main-header").addClass("sticky");
  } else {
    $(".main-header").removeClass("sticky");
  }
});

// Tab Panel
$(".btn-control-one").click(function () {
  $(".panel-one").toggleClass("active");
});
$(".search-btn-one").click(function () {
  $(".panel-one .hidden").toggle();
});
//-----------------------------
$(".btn-control-two").click(function () {
  $(".panel-two").toggleClass("active");
});
$(".search-btn-two").click(function () {
  $(".panel-two .hidden").toggle();
});
//-----------------------------
$(".btn-control-three").click(function () {
  $(".panel-three").toggleClass("active");
});

// Owl Three
$(".owl-three").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [
    "<img src='images/icon/left-circle-arrow.png' />",
    "<img src='images/icon/right-circle-arrow.png' />",
  ],
  dots: false,
  // Autoplay
  autoplay: false,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  // Smart Speed
  smartSpeed: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});
