$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true, // Enables navigation arrows
    dots: true, // Enables dots pagination
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000, // Speed of autoplay
    smartSpeed: 1000, // Transition speed
    items: 1,
    navText: [
      "<i class='fas fa-chevron-left'></i>", // Left arrow icon (Font Awesome)
      "<i class='fas fa-chevron-right'></i>" // Right arrow icon (Font Awesome)
    ]
  });
});


