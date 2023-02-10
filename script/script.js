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

const menuMobileIcon = document.querySelector(".menu-mobile .menu-icon");
const menuMobile = document.querySelector(".menu-mobile .menu-mobile__list");
const menuMobileModalLayout = document.querySelector(
  ".main-header .menu-mobile-modal"
);
const menuCloseBtn = document.querySelector(
  ".menu-mobile__list .close-menu-mobile"
);
menuMobileIcon.addEventListener("click", () => {
  menuMobile.classList.add("active");
  menuMobileModalLayout.style.display = "block";
});

menuCloseBtn.addEventListener("click", () => {
  menuMobile.classList.remove("active");
  menuMobileModalLayout.style.display = "none";
});

menuMobileModalLayout.addEventListener("click", () => {
  menuMobile.classList.remove("active");
  menuMobileModalLayout.style.display = "none";
});
