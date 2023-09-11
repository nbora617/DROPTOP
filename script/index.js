// top버튼
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#top').fadeIn();
            $('aside').fadeIn();
        } else {
            $('#top').fadeOut();
            $('aside').fadeOut();
        }
    });
    
    $("#top").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});

// <!--스크롤 애니메이션-->
$(document).ready(function() {
    $(window).scroll( function(){
        $('section').each( function(){
            var bottom_of_element = $(this).offset().top /* + $(this).outerHeight() */;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},700);
            }
            
        }); 
    });
});

// main_visual swiper영역
const main_bnr = new Swiper('#main_visual', {
    direction:'horizontal',
    loop:true,
    autoplay:{delay:3000}, //자동재생
    on:{ //슬라이드의 글자가 나타나고 사라지는 기능
        init:function(){
            //슬라이드 변경되기 전 초기 실행함수
            this.slides[this.activeIndex].querySelector('.txt').style.opacity = '1';
        },
        slideChange:function(){
            //슬라이드 변경될 때 인식되는 실행함수
            //1. 활성화 전 모든 슬라이드 opacity:0
            this.slides.forEach(target => {
                target.querySelector('.txt').style.opacity = '0';
                target.querySelector('.txt').style.transform = 'translateY(20px)';
            })
            //2. 활성화 슬라이드만 opacity:1
            this.slides[this.activeIndex].querySelector('.txt').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.txt').style.transform = 'translate(0)';
        }
    },
})
// main_visual end
// NEW MENU swiper영역
// 상품1
const flake = new Swiper('#menu_list1', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView:1,
    spaceBetween:20,
    loopAdditionalSlides : 1,
/*     pagination: {
        el:".swiper-pagination",
        type: "fraction",
    }, */
    breakpoints:{
        500:{slidesPerView:2, centeredSlides:true,},
        700:{slidesPerView:3, centeredSlides:true,},
        1400:{slidesPerView:4, centeredSlides:true,}
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
// 상품2
const tea = new Swiper('#menu_list2', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView:1,
    /* loopAdditionalSlides : 1, */ // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    spaceBetween:20,
    /*  pagination: {
        el:".swiper-pagination",
        type: "fraction",
    }, */
    breakpoints:{
        500:{slidesPerView:2, centeredSlides:true,},
        700:{slidesPerView:3, centeredSlides:true,},
        1400:{slidesPerView:4, centeredSlides:true,}
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
// 상품3
const drink = new Swiper('#menu_list3', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView:1,
    /* loopAdditionalSlides : 1,  */
    spaceBetween:20,
/*     pagination: {
        el:".swiper-pagination",
        type: "fraction",
    }, */
    breakpoints:{
        500:{slidesPerView:2, centeredSlides:true,},
        700:{slidesPerView:3, centeredSlides:true,},
        1400:{slidesPerView:4, centeredSlides:true,}
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
// tab menu
$("#new_menu .btm > div").eq(1).hide();
$("#new_menu .btm > div").eq(2).hide();
    $(document).ready(function() {
        $("#new_menu .top .new_tab a").click(function(e){
            e.preventDefault()
            var i = $(this).index();
            $("#new_menu .top .new_tab a").removeClass("active");
            $("#new_menu .top .new_tab a").eq(i).addClass("active");
            $("#new_menu .btm > div").hide();
            $("#new_menu .btm > div").eq(i).show();
        })
    });
// NEW MENU end
// SIGNATURE swiper
const signature = new Swiper('#signature_swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    // slidesPerView:1,
    loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    pagination: {
        el:".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
// SIGNATURE swiper end
// EVENT
// event tab클릭시 해당하는 내용 보이기
$("main #event .right .event_box > div").eq(1).hide();
    $(document).ready(function() {
        $("#event .left .event_tab a").click(function(e){
            e.preventDefault()
            var i = $(this).index();
            $("#event .left .event_tab a").removeClass("e_active");
            $("#event .left .event_tab a").eq(i).addClass("e_active");
            $("main #event .right .event_box > div").hide();
            $("main #event .right .event_box > div").eq(i).show();
        })
    });

// 인스타그램 슬라이드
const insta = new Swiper('#insta_slide', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView:1,
    // loopAdditionalSlides:1,
    spaceBetween:20,
     //반응형 페이지 수
    breakpoints:{
        700:{slidesPerView:2, centeredSlides:true,},
        1000:{slidesPerView:3, centeredSlides:true,},
        1400:{slidesPerView:4, centeredSlides:true,}
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})