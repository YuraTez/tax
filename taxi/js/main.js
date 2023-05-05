$('.main-slider').slick({
    dots: true,
    appendDots: ".main-dots",
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: '.main-slider-arrows',
    prevArrow: '.main-slider-prevArrow',
    nextArrow: '.main-slider-nextArrow'
});

$("a").on("click", function (event) {
    let href = $(this).attr("href");
    if(!event.target.classList.contains("open-form")){
        $("html, body").animate({
            scrollTop: $(href).offset().top - 105
        }, {
            duration: 400,
        });
    }
    return false;
});

$(".open-form").on("click",()=>{
    $(".pop-up-form").addClass("active");
    $(".substrate").addClass("active")
})

$(".substrate").on("click",()=>{
    $(".pop-up-form").removeClass("active");
    $(".substrate").removeClass("active")
})

$(".modal-cross").on("click",()=>{
    $(".pop-up-form").removeClass("active");
    $(".substrate").removeClass("active")
})


$(document).ready(function () {
    let $slider = $('#main-slider');
    let sliderCounter = document.getElementsByClassName("slider-counter");
    let sliderCounterSum = document.getElementsByClassName("slider-counter-sum");


    let updateSliderCounter = function (slick, currentIndex, nextSlide) {
        let next = nextSlide + 1;
        let allSlides = slick.slideCount;
        $(sliderCounter).text(next);
        $(sliderCounterSum).text(allSlides);


    };
    let sliderCounterSumNew = document.querySelector(".slider-counter-sum");
    if (sliderCounterSumNew !== null){
        sliderCounterSumNew.innerHTML = $("#main-slider").slick("getSlick").slideCount;
    }


    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        updateSliderCounter(slick, currentSlide, nextSlide);

    });
});


const shopList = document.querySelectorAll(".main-shop-list__item");
const shopBlockList = document.querySelectorAll(".main-shops-img-container");

shopList.forEach((el)=>{

    el.addEventListener("mouseover",function (event){
        event.preventDefault();
        let shopData = this.getAttribute("data-shop");

        shopBlockList.forEach((shopBlockItem)=>{
            let shopBlockData = shopBlockItem.getAttribute("data-shop");
            shopBlockItem.classList.remove("active");
            if(shopData === shopBlockData){
                removeShopActive(shopList);
                shopBlockItem.classList.add("active")
                el.classList.add("active")
                if(el.previousElementSibling !== null){
                    el.previousElementSibling.classList.add("border-none")
                }
            }
        })
    })
})

function removeShopActive(arr){
    arr.forEach((el)=>{
        el.classList.remove("active")
        el.classList.remove("border-none")
    })
}

/* меняем стили шапки добавляя класс */
if(window.innerWidth > 900){
    $(document).scroll(function(e){

        if($(".header").offset().top> 200){
            $(".header").addClass("scroll")
        }else{
            $(".header").removeClass("scroll")
        }

    });
}

/*клик на бургер показывает бургер меню*/
$('.burger').on('click', function () {
    removeFastSearch()
    $('.burger').toggleClass("active");
    $('.mobile-menu').toggleClass("active");
});

/*открытие подменю*/
$('.nav-list__item--submenu > span').on('click', function (event) {

    if ($(this).siblings('.nav-submenu').hasClass("active")) {
        $('.nav-submenu').removeClass('active');
        $("span.is-active").removeClass('is-active');
    } else {
        $('.nav-submenu').removeClass('active');
        $(this).siblings('.nav-submenu').addClass('active');
        $(this).addClass('is-active');
    }
});


$('.switch-grid').on('click', function () {
    $(".switch-list").removeClass("active");
    $(".list-shops").removeClass("active");
    $(".switch-grid").addClass("active");
    $(".grid-shops").addClass("active");
});

$('.switch-list').on('click', function () {
    $(".switch-grid").removeClass("active");
    $(".grid-shops").removeClass("active");
    $(".switch-list").addClass("active");
    $(".list-shops").addClass("active");
});

const questionsList = document.querySelectorAll(".questions-item-header");

if(questionsList !== null){
    questionsList.forEach((el)=>{
        el.addEventListener("click",function (){
            el.classList.toggle("active");
            $(this).siblings().slideToggle( "slow" );
        })
    })
}

$('#big-slider').slick({
    dots: true,
    infinite: true,
   /* autoplay:true,*/
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: ".big-dots",
    appendArrows: '.big-navigation',
    prevArrow: '.big-prevArrow',
    nextArrow: '.big-nextArrow'
});

$('#big-slider').on('afterChange', function(event, slick, currentSlide){
    $('.big-slider-description__item').removeClass("active")
    let listActiveSlide = this.querySelectorAll('.big-slider-description__item[data-slide="'+currentSlide+'"]');
    listActiveSlide.forEach((el)=>{
        el.classList.add("active")
    })

});

$('.big-slider-description__item').on('click', function(){
    let slideNumber = this.getAttribute("data-slide");
    $('#big-slider').slick('slickGoTo', slideNumber,  false);
});

if($('.big-slider-description__item').length > 0){
    const positionDotsSliderBig = $(".slick-active .big-slider-text").offset().left - $("#big-slider").offset().left;
    $(".big-navigation").css("left", positionDotsSliderBig);
}

if($(".company-content").length > 0){
    $(".company-content").css("min-height", $(".company-content-img").height() + "px")
}

$(".flag-list__item a").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 130}, 100);
    return false;
});


$(".hide-btn--map").on('click', function () {
    const parent = this.parentElement;
    parent.classList.toggle("active");

    if (parent.classList.contains("active")) {
        this.innerHTML = `Скрыть карту 
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5.99805L6 0.998047L1 5.99805" stroke="#333333"/>
                            </svg>`;
            $(this).parent().find(".map").fadeIn()
    } else {
        this.innerHTML = `Показать на карте
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.998047L6 5.99805L11 0.998047" stroke="#333333"/>
                    </svg>`;
        $(this).parent().find(".map").fadeOut()
    }
});

$(".hide-btn--text").on('click', function () {
    const parent = this.parentElement;
    parent.classList.toggle("active");

    if (parent.classList.contains("active")) {
        this.innerHTML = `Свернуть
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5.99805L6 0.998047L1 5.99805" stroke="#333333"/>
                            </svg>`;
        $(this).parent().find(".map").fadeIn()
    } else {
        this.innerHTML = `Подробнее
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.998047L6 5.99805L11 0.998047" stroke="#333333"/>
                    </svg>`;
        $(this).parent().find(".map").fadeOut()
    }
});


const listPlaces = document.querySelectorAll(".visit-table-list__item")
const listPlacesContent = document.querySelectorAll(".visit-table-day");

if(listPlaces){
    listPlaces.forEach((el)=>{
      el.addEventListener("click" , function (event){
          $(".visit-table-list__item").removeClass("active");
          this.classList.add("active");
          const dataElem = this.getAttribute("data-place");
          listPlacesContent.forEach((el)=>{
              const dataContent = el.getAttribute("data-visit");
              if(dataElem === dataContent){
                  $(".visit-table-day").removeClass("active");
                  el.classList.add("active")
              }
          })
      })
    })
}

$(".visit-table-mobile__item-header").on('click', function () {
    $(".visit-table-mobile__item-body").fadeOut()
    const parent = this.parentElement;

    if (!parent.classList.contains("active")) {
        $(".visit-table-mobile__item").removeClass("active")
        parent.classList.add("active");
        $(this).parent().find(".visit-table-mobile__item-body").fadeIn()
        setTimeout(()=>{
            const position = $(this).offset().top;
            $("html:not(:animated),body:not(:animated)").animate({scrollTop: position - 130}, 100);
        }, 500)


    }else{
        parent.classList.remove("active");
    }

});

const maskPhone = () => {
    $("#phone").mask("+375 (99) 999-99-99");
}

maskPhone()






/*
$(".form").submit(function (event) {
    event.preventDefault();

    // Сообщения формы
    let successSendText = "Сообщение успешно отправлено";
    let errorSendText = "Сообщение не отправлено. Попробуйте еще раз!";
    let requiredFieldsText = "Заполните поля с именем и телефоном";

    // Сохраняем в переменную класс с параграфом для вывода сообщений об отправке
    let message = $(this).find(".contact-form__message");

    let form = $("#" + $(this).attr("id"))[0];
    let fd = new FormData(form);
    $.ajax({
        url: "../chat-php/telegram.php",
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        beforeSend: () => {
            $(".preloader").addClass("preloader_active");
        },
        success: function success(res) {
            $(".preloader").removeClass("preloader_active");

            // Посмотреть на статус ответа, если ошибка
            // console.log(res);
            let respond = $.parseJSON(res);

            if (respond === "SUCCESS") {
                message.text(successSendText).css("color", "#21d4bb");
                setTimeout(() => {
                    message.text("");
                }, 4000);
            } else if (respond === "NOTVALID") {
                message.text(requiredFieldsText).css("color", "#d42121");
                setTimeout(() => {
                    message.text("");
                }, 3000);
            } else {
                message.text(errorSendText).css("color", "#d42121");
                setTimeout(() => {
                    message.text("");
                }, 4000);
            }
        }
    });
});*/
