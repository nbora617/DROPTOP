// 스크롤 따라다니는 header
$(window).scroll(function() {
    if($(this).scrollTop() > 200) {
        $("header").css('position','fixed');
        $("header").css('background','#171C8F');
    }
    // else {
    //     // $("header").css('position','relative');
    //     $("header").css('opacity','0')
    // }
});
// //header에 마우스 올렸을 때 logo 변경
// const header = document.querySelector('header')
// const logo = document.querySelector('header h1 a img')
// console.log(header, logo)
// header.addEventListener('mouseover',function(){
//     logo.src='./images/main_logo.png'
// })
// header.addEventListener('mouseout',function(){
//     logo.src='./images/main_logo_w.png'
// })
// //main_m에 마우스 올리면 sub_m 보이기
const nav = $('header nav > .main_m')
const main_m = $('header nav > .main_m > li')
const sub_m = $('header nav > .main_m > li > .sub_m')
sub_m.hide();
main_m.on('mouseover',function(){
    $(this).find('.sub_m').slideDown(300);
    $("ul li a").not(this).next().slideUp(300);
    return true;
})
sub_m.on('mouseout',function(){
    sub_m.slideUp(300);
    return false;
})
// nav.on('mouseout',function(){
//     $(this).find('li > .sub_m').slideUp(300)
//     // $(this).find('> a').css('fontWeight','700')
// })

