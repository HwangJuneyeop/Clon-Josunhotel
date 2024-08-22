//GSAP 스크롤티거
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

document.addEventListener("DOMContentLoaded", (event) => {

  let panels = gsap.utils.toArray(".panel"),
    observer = ScrollTrigger.normalizeScroll(true),
    scrollTween;

  document.addEventListener("touchstart", e => {
    if (scrollTween) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, { capture: true, passive: false })

  function goToSection(i) {
    scrollTween = gsap.to(window, {
      scrollTo: { y: i * innerHeight, autoKill: false },
      onStart: () => {
        observer.disable();
        observer.enable();
      },
      duration: 1,
      onComplete: () => scrollTween = null,
      overwrite: true
    });
  }

  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top bottom",
      end: "+=199%",
      onToggle: self => self.isActive && !scrollTween && goToSection(i)
    });
  });


  ScrollTrigger.create({
    start: 0,
    end: "#footer",
    snap: 1 / (panels.length - 1)
  })
});





/* 스와이퍼 슬라이드 */
$('.slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: $('.prevArrow'),
  nextArrow: $('.nextArrow'),
});
$('.slider_lg').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.prevArrow_lg'),
  nextArrow: $('.nextArrow_lg'),
});
$('.slider').on('afterChange', function (event, slick, currentSlide) {
  if (currentSlide === 0) {
    $('.prevArrow').hide();
  } else {
    $('.prevArrow').show();
  }
  if (currentSlide === slick.slideCount - slick.options.slidesToShow) {
    $('.nextArrow').hide();
  } else {
    $('.nextArrow').show();
  }
});
$('.prevArrow').hide();

var swiper = new Swiper(".mySwiper", {
  effect: 'fade',
  fadeEffect: { crossFade: true },

  navigation: {
    nextEl: ".nextArrow_ht",
    prevEl: ".prevArrow_ht"
  }
});

/* 스타일1 gnb */
$(document).ready(function () {
  $(".btnmenu").click(function () {
    $(".menu_drop").slideToggle();
    if ($(this).hasClass("rotated")) {
      $(this).css({
        "transform": "rotate(0deg)",
        "background-position": "0"
      });
      $(".gnb_area").css("background", "transparent");
      $(".btn_opner").css("color", "white");
      $(".btn_EN").css("color", "white");
      $(".gnb_box a").css("color", "white");
      $(".gnbutil").css("color", "white");
      $(".btn_drop").css({ "color": "white", "border-color": "white" })
      $(".hd_search").attr("src", "img/ico_search_white.png");
      $(".logo").css("background-position", "0 0");
      $(".btn_opner").removeClass("black")
      $(".main_left").css("display", "block");
      $(".scroll_ico").css("display", "block");
      $(".main_left ul .left6").removeClass("on")
      $(this).removeClass("rotated");
    } else {
      $(this).css({
        "transform": "rotate(20deg)",
        "background-position": "-30px"
      });
      $(".gnb_area").css("background", "white");
      $(".btn_opner").css("color", "black");
      $(".btn_EN").css("color", "black");
      $(".gnb_box a").css("color", "black");
      $(".gnbutil").css("color", "black")
      $(".btn_drop").css({ "color": "black", "border-color": "black" })
      $(".hd_search").attr("src", "img/ico_search_black.png");
      $(".logo").css("background-position", "0 -60px");
      $(".btn_opner").addClass("black")
      $(".main_left").css("display", "none");
      $(".scroll_ico").css("display", "none");
      $(this).addClass("rotated");
    }
  });
  // btn_close 클릭시 메뉴 닫기
  $(".btn_close").click(function () {
    $(".menu_drop").slideUp();
    $(".btnmenu").css({
      "transform": "rotate(0deg)",
      "background-position": "0"
    });
    $(".main_left").css("display", "block");
    $(".gnb_area").css("background", "transparent");
    $(".btn_opner").css("color", "white");
    $(".btn_EN").css("color", "white");
    $(".gnb_box a").css("color", "white");
    $(".gnbutil").css("color", "white");
    $(".btn_drop").css({ "color": "white", "border-color": "white" })
    $(".hd_search").attr("src", "img/ico_search_white.png");
    $(".logo").css("background-position", "0 0");
    $(".btn_opner").removeClass("black")
    $(".btnmenu").removeClass("rotated");
  });
});

/* 스타일2 gnb */
$(document).ready(function () {
  $(".btnblack").click(function () {
    $(".menu_drop").slideToggle();
    if ($(this).hasClass("st2")) {
      $(this).css({
        "transform": "rotate(0deg)",
        "background-position": "-36px"
      });
      $(".gnb_area").css("background", "white");
      $(".btn_opner").css("color", "black");
      $(".btn_EN").css("color", "black");
      $(".gnb_box a").css("color", "black");
      $(".gnbutil").css("color", "black")
      $(".btn_drop").css({ "color": "black", "border-color": "black" })
      $(".hd_search").attr("src", "img/ico_search_black.png");
      $(".logo").css("background-position", "0 -60px");
      $(".btn_opner").addClass("black")
      $(".main_left").css("display", "block");
      $(this).removeClass("st2");
    } else {
      $(this).css({
        "transform": "rotate(20deg)",
        "background-position": "-36px"
      });
      $(".gnb_area").css("background", "white");
      $(".btn_opner").css("color", "black");
      $(".btn_EN").css("color", "black");
      $(".gnb_box a").css("color", "black");
      $(".gnbutil").css("color", "black")
      $(".btn_drop").css({ "color": "black", "border-color": "black" })
      $(".hd_search").attr("src", "img/ico_search_black.png");
      $(".logo").css("background-position", "0 -60px");
      $(".btn_opner").addClass("black")
      $(".main_left").css("display", "none");
      $(this).addClass("st2");
    }
  });

  // btn_close 클릭시 메뉴 닫기
  $(".btn_close2").click(function () {
    $(".menu_drop").slideUp();
    $(".btnblack").css({
      "transform": "rotate(0deg)",
      "background-position": "-36px"
    });
    $(".main_left").css("display", "block");
    $(".gnb_area").css("background", "white");
    $(".btn_opner").css("color", "black");
    $(".btn_EN").css("color", "black");
    $(".gnb_box a").css("color", "black");
    $(".gnbutil").css("color", "black");
    $(".btn_drop").css({ "color": "black", "border-color": "black" })
    $(".hd_search").attr("src", "img/ico_search_black.png");
    $(".logo").css("background-position", "0 -60px");
    $(".btn_opner").addClass("black")
    $(".btnmenu").addClass("st2");
  });
});

// 상단 KR 버튼을 누르면 EN이 나오게하기
$(function () {
  $('.btn_opner').on('click', function () {
    $('.btn_EN').toggleClass('active')
  })
})

// 텍스트가 서서히 나타나게하기
document.addEventListener("DOMContentLoaded", function () {
  var text = document.querySelector(".main_text");
  text.classList.add("show");
});

//타입2 영역
$(document).ready(function () {
  var type2Section = $(".type2");

  ScrollTrigger.create({
    trigger: type2Section,
    start: "top center",
    onEnter: function () {
      $(".btnmenu").css("display", "none")
      $(".btnmenu").css("background-position", "-1px");
      $(".btnblack").css("display", "block")
      $(".btn_close").css("display", "none")
      $(".btn_close2").css("display", "block")
      $(".btnblack").css("background-position", "-36px");
      $(".gnb_area").css("background", "white");
      $(".btn_opner").css("color", "black");
      $(".btn_EN").css("color", "black");
      $(".gnb_box a").css("color", "black");
      $(".gnbutil").css("color", "black")
      $(".btn_drop").css({ "color": "black", "border-color": "black" })
      $(".hd_search").attr("src", "img/ico_search_black.png");
      $(".logo").css("background-position", "0 -60px");
      $(".btn_opner").addClass("black")
      $(".scroll_ico").css("display", "none");
      $(".main_left ul .left2").addClass("on");
      $(".main_left ul .left1").removeClass("on")
      $(".left_box").addClass("st1")

    },
    onLeaveBack: function () {
      $(".btnmenu").css("display", "block")
      $(".btnmenu").css("background-position", "-1px");
      $(".btnblack").css("display", "none")
      $(".btn_close").css("display", "block")
      $(".btn_close2").css("display", "none")
      $(".btnblack").css("background-position", "0");
      $(".gnb_area").css("background", "transparent");
      $(".btn_opner").css("color", "white");
      $(".btn_EN").css("color", "white");
      $(".gnb_box a").css("color", "white");
      $(".gnbutil").css("color", "white");
      $(".btn_drop").css({ "color": "white", "border-color": "white" })
      $(".hd_search").attr("src", "img/ico_search_white.png");
      $(".logo").css("background-position", "0 0");
      $(".btn_opner").removeClass("black")
      $(".scroll_ico").css("display", "block");
      $(".main_left ul .left2").removeClass("on");
      $(".main_left ul .left1").addClass("on")
      $(".left_box").removeClass("st1")
    }
  });
});

/* 타입3 */
$(document).ready(function () {
  var type3Section = $(".type3");

  ScrollTrigger.create({
    trigger: type3Section,
    start: "top center",
    onEnter: function () {
      $(".btnmenu").css("display", "none")
      $(".btnmenu").css("background-position", "-1px");
      $(".btnblack").css("display", "block")
      $(".btn_close").css("display", "none")
      $(".btn_close2").css("display", "block")
      $(".main_left ul .left3").addClass("on");
      $(".main_left ul .left2").removeClass("on")
      $(".left_box").addClass("st1")

    },
    onLeaveBack: function () {
      $(".btnmenu").css("display", "none")
      $(".btnmenu").css("background-position", "-1px");
      $(".btnblack").css("display", "block")
      $(".btn_close").css("display", "none")
      $(".btn_close2").css("display", "block")
      $(".main_left ul .left3").removeClass("on");
      $(".main_left ul .left2").addClass("on")
      $(".left_box").removeClass("st1")
    }
  });
});

/* 타입4 */
$(document).ready(function () {
  var type4Section = $(".type4");

  ScrollTrigger.create({
    trigger: type4Section,
    start: "top center",
    onEnter: function () {
      $(".btnmenu").css("display", "none")
      $(".btnmenu").css("background-position", "-1px");
      $(".btnblack").css("display", "block")
      $(".btn_close").css("display", "none")
      $(".btn_close2").css("display", "block")
      $(".main_left ul .left4").addClass("on");
      $(".main_left ul .left3").removeClass("on")
      $(".left_box").addClass("st1")
      $(".club_box").css("opacity", "1");

    },
    onLeaveBack: function () {
      $(".btnmenu").css("display", "none")
      $(".btnmenu").css("background-position", "-1px");
      $(".btnblack").css("display", "block")
      $(".btn_close").css("display", "none")
      $(".btn_close2").css("display", "block")
      $(".main_left ul .left4").removeClass("on");
      $(".main_left ul .left3").addClass("on")
      $(".left_box").removeClass("st1")
      $(".club_box").css("opacity", "0");
    }
  });
});

/* 타입5 */
$(document).ready(function () {
  var type5Section = $(".type5");

  ScrollTrigger.create({
    trigger: type5Section,
    start: "top center",
    onEnter: function () {
      $(".btnmenu").css("display", "block")
      $(".btnblack").css("display", "none")
      $(".btn_close").css("display", "block")
      $(".btn_close2").css("display", "none")
      $(".btnmenu").css("background-position", "0");
      $(".gnb_area").css("background", "transparent");
      $(".btn_opner").css("color", "white");
      $(".btn_EN").css("color", "white");
      $(".gnb_box a").css("color", "white");
      $(".gnbutil").css("color", "white");
      $(".btn_drop").css({ "color": "white", "border-color": "white" })
      $(".hd_search").attr("src", "img/ico_search_white.png");
      $(".logo").css("background-position", "0 0");
      $(".btn_opner").removeClass("black")
      $(".left_box").removeClass("st1")
      $(".main_left ul .left5").addClass("on");
      $(".main_left ul .left4").removeClass("on");
    },
    onLeaveBack: function () {
      $(".btnblack").css("display", "block")
      $(".btnmenu").css("background-position", "-36px");
      $(".gnb_area").css("background", "white");
      $(".btn_opner").css("color", "black");
      $(".btn_EN").css("color", "black");
      $(".gnb_box a").css("color", "black");
      $(".gnbutil").css("color", "black")
      $(".btn_drop").css({ "color": "black", "border-color": "black" })
      $(".hd_search").attr("src", "img/ico_search_black.png");
      $(".logo").css("background-position", "0 -60px");
      $(".btn_opner").addClass("black")
      $(".main_left ul .left5").removeClass("on");
      $(".main_left ul .left4").addClass("on")
      $(".left_box").addClass("st1")
      $(".btnblack").css("display", "none");
    }
  });
});

/* 타입6 */
$(document).ready(function () {
  var type6Section = $(".type6");

  ScrollTrigger.create({
    trigger: type6Section,
    start: "top center",
    onEnter: function () {
      $(".main_left ul .left6").addClass("on");
      $(".main_left ul .left5").removeClass("on")
      $(".left_box").addClass("st1")

    },
    onLeaveBack: function () {
      $(".main_left ul .left6").removeClass("on");
      $(".main_left ul .left5").addClass("on")
      $(".left_box").removeClass("st1")

    }
  });
});


// 타입 6 hover하면 배경이미지 변경
$(document).ready(function () {
  var $businessElement = $('.business');

  $('.list2').hover(
    function () {
      $businessElement.css({
        'transition': 'background 0.3s ease',
        'background': 'url(img/business2.jpg)'
      });
    },
    function () {
      $businessElement.css({
        'transition': 'background 0.3s ease',
        'background': 'url(img/business1.jpg)'
      });
    }
  );

  $('.list3').hover(
    function () {
      $businessElement.css({
        'transition': 'background 0.3s ease',
        'background': 'url(img/business3.jpg)'
      });
    },
    function () {
      $businessElement.css({
        'transition': 'background 0.3s ease',
        'background': 'url(img/business1.jpg)'
      });
    }
  );

  $('.list4').hover(
    function () {
      $businessElement.css({
        'transition': 'background 0.3s ease',
        'background': 'url(img/business4.jpg)'
      });
    },
    function () {
      $businessElement.css({
        'transition': 'background 0.3s ease',
        'background': 'url(img/business1.jpg)'
      });
    }
  );

  $('.list5').hover(
    function () {
      $businessElement.css({
        'transition': 'background 0.3s ease',
        'background': 'url(img/business5.jpg)'
      });
    },
    function () {
      $businessElement.css({
        'transition': 'background 0.3s ease',
        'background': 'url(img/business1.jpg)'
      });
    }
  );

  $('.list6').hover(
    function () {
      $businessElement.css({
        'transition': 'background 0.3s ease',
        'background': 'url(img/business6.jpg)'
      });
    },
    function () {
      $businessElement.css({
        'transition': 'background 0.3s ease',
        'background': 'url(img/business1.jpg)'
      });
    }
  );

  $('.list7').hover(
    function () {
      $businessElement.css({
        'transition': 'background 0.3s ease',
        'background': 'url(img/business7.jpg)'
      });
    },
    function () {
      $businessElement.css({
        'transition': 'background 0.3s ease',
        'background': 'url(img/business1.jpg)'
      });
    }
  );

  $('.list8').hover(
    function () {
      $businessElement.css({
        'transition': 'background 0.3s ease',
        'background': 'url(img/business8.jpg)'
      });
    },
    function () {
      $businessElement.css({
        'transition': 'background 0.3s fadeOut',
        'background': 'url(img/business1.jpg)'
      });
    }
  );
});


//family site 클릭시 메뉴 슬라이드 업
$(function () {
  $('.btn_family').on('click', function () {
    $('.item_list').slideToggle();
    $(this).find('img').attr('src', function (index, attr) {
      return attr === 'img/chevron-down.png' ? 'img/chevron-up.png' : 'img/chevron-down.png';
    });
  })
})



 