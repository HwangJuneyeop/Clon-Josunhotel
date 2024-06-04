$(document).ready(function () {
  $(".btnmenu").click(function () {
    $(".menu_drop").slideToggle();
    if ($(this).hasClass("rotated")) {
      $(this).css("transform", "rotate(0)");
      $(this).removeClass("rotated");
    } else {
      $(this).css("transform", "rotate(20deg)");
      $(this).addClass("rotated");
    }
  });

  // 상단 KR 버튼을 누르면 EN이 나오게하기
  $(function () {
    $('.btn_opner').on('click', function () {
      $('.btn_EN').toggleClass('active')
    })
  })

  // btn_close 클릭시 메뉴 닫기
  $(".btn_close").click(function () {
    $(".menu_drop").slideUp();
    $(".btnmenu").css({
      "transform": "rotate(0deg)"
    });
    $(".btnmenu").removeClass("rotated");
  });

  //btn_drop 나타났다 사라졌다
  $('.btn_drop').on('click', function () {
    $(".gnbutil ul").toggle();
  })
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



document.addEventListener("DOMContentLoaded", function () {
  var box = document.querySelector(".package1");
  var box2 = document.querySelector(".package2");
  var box3 = document.querySelector(".package3");

  box.classList.add("show");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 600) { 
      box2.classList.add("show");
    }

    if (window.scrollY >= 1500) { 
      box3.classList.add("show"); 
    }
  });

  if (window.scrollY >= 1600) {
    box3.classList.add("show");
  }
});


$(function(){
  $('.btn_more').on('click', function(){
      $('.package_box .package4').css('display', 'flex').hide().fadeIn(2000);
  });
});