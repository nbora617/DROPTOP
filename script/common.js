// //main_m에 마우스 올리면 sub_m 보이기
const sub_m = $('header nav > .main_m > li > .sub_m')
sub_m.hide();
$('header nav > .main_m > li').hover(function(){
    $(this).children("ul").stop().slideToggle(300)
})

// 모바일 메뉴
//header m_menu
$(document).ready(function(){
    //m_menu 초기 숨기기
    $('.open_nav').css('transform','translateX(100%)');
    //m_nav 클릭시 m_menu 보이기 
    $('.m_nav').click(function(){
        $('.open_nav').css('transform','translateX(0)')
        $('.open_nav').css('transition','0.7s ease-in')
    });
    //닫기 클릭 시 m_menu 숨이고 클릭했던 sub_menu도 초기 숨기기
    $('#close').click(function(){
        // $('.open_m_menu').hide()
        $('.open_nav').css('transform','translateX(100%)');
        $(".m_menu .sub_m").hide();
    });
    //m_menu의 sub_menu 초기 숨기기
    $(".m_menu .sub_m").hide();
    //m_menu의 nav클릭시 서브메뉴보이고 다시 클릭하면 숨기기
    $(".m_menu > li > a").click(function(){
        $(this).next().slideToggle(300);
        // $(this).css('backgroundColor','#d3d2d2')
        // $(this).find('.fa-solid').css('transform','rotate(270deg)')
        // $(this).find('.fa-solid').css('transition','0.5s')
      // $(this).next().slideDown(300);
        $("ul li a").not(this).next().slideUp(300);
        return false;
    });
    $("ul li a").eq(0).trigger("click");
})


// 스크롤시 색상이 변하는 header
// var header = $("header").offset().top;
// $(window).scroll(function() {
//     var window = $(this).scrollTop();
//     if(header <= window) {
//         $("header").addClass("fixed");
//     } else {
//         $("header").removeClass("fixed");
//     }
// })

// let header = document.querySelector(".header");
// let headerHeight = header.offsetHeight;

// window.onscroll = function () {
//   let windowTop = window.scrollY;
//   if (windowTop >= headerHeight) {
//     header.classList.add("drop");
//   } else {
//     header.classList.remove("drop");
//   }
// };


// $(function(){
//     var $header = $('header'); //헤더를 변수에 넣기
//     var $page = $('.nav'); //색상이 변할 부분
//     var $window = $(window);
//     var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
    
//     $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
//         pageOffsetTop = $page.offset().top;
//     });
    
//     $window.on('scroll', function(){ //스크롤시
//       var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
//       $header.toggleClass('down', scrolled); //클래스 토글
//         $("header").css('position','fixed');
//     });
// });