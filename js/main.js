$(document).ready(function(){
    // 메뉴 버튼
    $('.menu_btn').click(function(){
        $('header nav').animate({'right':0});
        $('html,body').css('overflow-y','hidden');
    });
    // 클로즈 버튼
    $('.close_btn').click(function(){
        $('header nav').animate({'right':'-100vw'});
        $('html,body').css('overflow-y','visible');
    });
    // 헤더 네브 유엘 메뉴
    $('header nav > ul > li > a').click(function(){
        if($(this).attr('class') != 'active') {
            $('header nav > ul > li > a').removeClass('active');
            $(this).addClass('active');
            $('header nav .sub').slideUp();
            $(this).next().slideDown();
        }else{
            $(this).removeClass('active');
            $(this).next().slideUp();
        }
    });

    var swiper = new Swiper(".mySwiper", {
        effect:'fade',
        loop:true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".mySwiper .swiper-pagination",
          clickable:true
        },
    });

// 탭메뉴
    // 모든 탭 리스트 안보임
    $('.tab_list').hide();
    // 첫번째 탭 리스트만 보임
    $('.tab_list').eq(0).fadeIn();
    var idx=0;
    $('.tab_title ul li').click(function(){
        // 클릭한 li의 인덱스 번호를idx변수에 저장
        idx=$(this).index();
        $('.tab_title ul li').removeClass('active');
        $(this).addClass('active');
        $('.tab_list').hide();
        $('.tab_list').eq(idx).fadeIn();
        return false;
    });

    // 자종 탭메뉴
    var auto=setInterval(autoTab, 5000);
    function autoTab(){
        idx++;
        if(idx>2){idx=0;}
        $('.tab_title ul li').removeClass('active');
        $('.tab_title ul li').eq(idx).addClass('active');
        $('.tab_list').hide();
        $('.tab_list').eq(idx).fadeIn();
    } 

    var swiper2 = new Swiper(".mySwiper2", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".mySwiper2 .swiper-button-next",
            prevEl: ".mySwiper2 .swiper-button-prev",
          }
    });

    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 1.3,
        spaceBetween: 20,
        loop:true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".mySwiper3 .swiper-pagination",
          clickable:true
        },
    });

    $('.top').click(function(){
        $('html,body').animate({'scrollTop':0});
        return false;
    });

    var winH=$(window).height();
    $(window).scroll(function(){
        var win=$(this).scrollTop();
        if(win>0){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
        if(win > winH) {
            $('.top').addClass('active');
        }else{
            $('.top').removeClass('active');
        }
    });
});