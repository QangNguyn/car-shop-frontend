$(document).ready(function () {
  $("#banner-home").owlCarousel({
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

if (menuCloseBtn) {
  menuCloseBtn.addEventListener("click", () => {
    menuMobile.classList.remove("active");
    menuMobileModalLayout.style.display = "none";
  });
}

if (menuMobileModalLayout) {
  menuMobileModalLayout.addEventListener("click", () => {
    menuMobile.classList.remove("active");
    menuMobileModalLayout.style.display = "none";
  });
}
// range price
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  showImageNumberLabel: false,
});

document.querySelectorAll(".filter-form__form--group").forEach((select) => {
  setupSelector(select);
});
function setupSelector(selector) {
  selector.querySelector("select").addEventListener("change", (e) => {
    // console.log("change", e.target.name);
    // console.log(1);
  });
  selector.addEventListener("mousedown", (e) => {
    e.preventDefault();
    if (selector.querySelectorAll("ul").length == 0) {
      const select = selector.children[0];
      const dropDown = document.createElement("ul");
      dropDown.className = "selector-options";
      [...select.children].forEach((option) => {
        const dropDownOption = document.createElement("li");
        dropDownOption.textContent = option.textContent;
        dropDownOption.addEventListener("mousedown", (e) => {
          e.stopPropagation();
          select.value = option.value;
          selector.value = option.value;
          select.dispatchEvent(new Event("change"));
          selector.dispatchEvent(new Event("change"));
          dropDown.remove();
        });
        dropDown.appendChild(dropDownOption);
      });
      selector.appendChild(dropDown);
      document.addEventListener("click", (e) => {
        if (!selector.contains(e.target)) {
          dropDown.remove();
        }
      });
    }
  });
}

$(document).ready(function () {
  var sync1 = $("#sync11");
  var sync2 = $("#sync21");
  var slidesPerPage = 5; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1
    .owlCarousel({
      items: 1,
      slideSpeed: 3000,
      dots: true,
      loop: true,
      responsiveRefreshRate: 200,

      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
    })
    .on("changed.owl.carousel", syncPosition);

  sync2
    .on("initialized.owl.carousel", function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: slidesPerPage,
      dots: true,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100,
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2.find(".owl-item.active").first().index();
    var end = sync2.find(".owl-item.active").last().index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data("owl.carousel").to(number, 300, true);
  });
});

$().ready(function () {
  $("#notification-form").validate({
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    rules: {
      email: {
        required: true,
      },
      name: {
        required: true,
      },
      "phone-number": {
        minlength: 8,
        required: true,
      },
    },
    messages: {
      email: {
        required: "Vui lòng nhập email.",
        email: "Vui lòng nhập địa chỉ email hợp lệ",
      },
      name: {
        required: "Vui lòng nhập tên.",
      },
      "phone-number": {
        required: "Vui lòng nhập số điện thoại.",
      },
    },
  });
});
$().ready(function () {
  $("#order-form").validate({
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    rules: {
      email: {
        required: true,
      },
      name: {
        required: true,
      },
      "phone-number": {
        minlength: 8,
        required: true,
      },
    },
    messages: {
      email: {
        required: "Vui lòng nhập email.",
        email: "Vui lòng nhập địa chỉ email hợp lệ",
      },
      name: {
        required: "Vui lòng nhập tên.",
      },
      "phone-number": {
        required: "Vui lòng nhập số điện thoại.",
      },
    },
  });
});
if (document.querySelector(".share-social-btn")) {
  document.querySelector(".share-social-btn").onclick = (e) => {
    e.preventDefault();
    const link = window.location.href;
    console.log(link);
    window.open(`https://www.facebook.com/share.php?u=${link}`);

    return false;
  };
}

window.addEventListener("load", () => {
  document.querySelector(".spinner").style.display = "none";
  document.querySelector(".spinner").style.opacity = "0";
  document.querySelector(".main").style.opacity = "1";
});
