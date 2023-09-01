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
const New = new Swiper('#menu_list', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView:2,
})
// //.section형제의 부모대상

// $('#fullpage').fullpage({
//     scrollBar:true, //스크롤바 표시 유무 true false
//     scrollingSpeed:2000, //스크롤 속도
//     navigation:true, //우측의 네비게이션 유무
//     navigationTooltips:['반얀트리 홈','s2','s3','s4'], //네비게이션의 명칭 지정
//     showActiveTooltip:true, //네비게이션 명칭이 보이도록 하는 속성
// })