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
// NEW MENU swiper영역
const New = new Swiper('#menu_list', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView:3,
})
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
const e_tab = document.querySelectorAll('#event .event_tab > a')
const e_content = document.querySelectorAll('#event .event_box > div' )
console.log(e_tab,e_content)
for(let i of e_tab){i.classList.remove('e_active')}
e_tab.forEach(function(t,i,a){
    t.addEventListener('click',function(e){
        e.preventDefault();
        for(let i of e_tab){i.classList.remove('e_active')}
        this[i].classList.add('e_active')
        for(let i of e_content){i.styke.display='none'}
        e_content[i].style.display = 'block'
    })
})







// //.section형제의 부모대상

// $('#fullpage').fullpage({
//     scrollBar:true, //스크롤바 표시 유무 true false
//     scrollingSpeed:2000, //스크롤 속도
//     navigation:true, //우측의 네비게이션 유무
//     navigationTooltips:['반얀트리 홈','s2','s3','s4'], //네비게이션의 명칭 지정
//     showActiveTooltip:true, //네비게이션 명칭이 보이도록 하는 속성
// })