$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
  });
});
var btn = $("#back-to-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.css("display", "flex");
    console.log(btn);
  } else {
    btn.css("display", "none");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
