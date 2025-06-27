$(document).ready(function () {//jquery start
    AOS.init();

    //  키워드 등록
    const BODY = $('body')
    const fixedTopBtn = $('.fixedTop_btn ')

    // desktop
    const NAV = $('header nav')
    const subNav = $('.subNav')

    // desktop navigation event

    NAV.on('mouseenter', dNav_open )
    subNav.on('mouseleave',dNav_reset)

    function dNav_open(){
        if(window.innerWidth>999){

            subNav.slideDown()
            BODY.addClass('dNav_open')
        }
    }

    function dNav_reset(){
        if(window.innerWidth>999){

            subNav.delay(300).slideUp(function(){
                $(this).removeAttr('style')
                setTimeout(function(){
                    BODY.removeClass('dNav_open')
                    
                },300)
            })
        }
    }



    // mobile 
    const mNavBtn = $('.m_nav_btn')
    const mSubBtn = $('.sub_depth_1 > li > a')
    const langSelect = $('.lang_select')



    // footer
    langSelect.on('click', function () {
        $(this).toggleClass('On')
    })

    // mobile navigation
    mSubBtn.on('click', mSub_toggle)
    mNavBtn.on('click', function (e) {
        e.preventDefault()
        BODY.toggleClass('mNav_open')
    })

    // mobile nav function
    function mSub_toggle(e){
        e.preventDefault()

        if ($(this).parent('li').hasClass('On')) {//만약 상위 li에 On이 있다면
            $(this).parent('li').removeClass('On')
            $(this).siblings('.sub_depth_2').slideUp()
        }
        else {
            $(this).parent('li')
                .addClass('On')
                .siblings()
                .removeClass('On')
                .children('.sub_depth_2').slideUp(function () {
                    $(this).removeAttr('style')
                })
            $(this).siblings('.sub_depth_2').slideDown()

        }
    }
    function mSub_reset(){
        BODY.removeClass('mNav_open')
        if(mSubBtn.parent('li').hasClass('On')){
            mSubBtn.parent('li').removeClass('On')
            $('.sub_depth_2').slideUp(function(){
                $(this).removeAttr('style')
            })
        }
    }

    $(window).on('resize load',function(){
        if(window.innerWidth>999){
            mSub_reset()
        }
    })



    // hero slider
    const heroSlider = new Swiper(".hero_slider", {
        pagination: {
            el: ".hero .swiper-pagination",
        },
        loop: true,
        autoplay:{
            delay:5000
        }
    });
    const s1Slider = new Swiper(".s1_slider", {
        pagination: {
            el: ".s1_slider .swiper-pagination",
        },
        navigation: {
            nextEl: ".s1_slider .swiper-button-next",
            prevEl: ".s1_slider .swiper-button-prev",
        },
    });
    const s3Slider = new Swiper(".s4_slider", {
        slidesPerView: "auto",
        speed: 5000,
        loop: true,
        autoplay: {
            delay: 0,
            stopOnLastSlide: false,
            // 이 매개변수를 활성화하면 마지막 슬라이드에 도달하면 자동재생이 중지됩니다(반복 모드에서는 효과가 없음
            disableOnInteraction: false,
            // false로 설정하면 사용자 상호작용(스와이프) 후에 자동재생이 비활성화되지 않으며 상호작용 후 매번 다시 시작됩니다.
        },
    });


// 스크롤 이벤트

    $(window).on('load',function(){
        let i = $(this).scrollTop()

        if(i>0){
            BODY.addClass('scroll')
        }
    })




    // scroll event
    $(window).on('scroll', function () {

        let i = $(this).scrollTop()

        console.log(i);

        if (i > 60) {

            BODY.addClass('scroll')
            fixedTopBtn.fadeIn()
            heroSlider.autoplay.stop()
        }
        else {
            
            heroSlider.autoplay.start()
            BODY.removeClass('scroll')
            fixedTopBtn.fadeOut()
        }
    })

    fixedTopBtn.on('click',function(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    })

})//jquery end