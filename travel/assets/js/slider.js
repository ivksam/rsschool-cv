new Swiper('.swiper-container',{
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    
    slidesPerGroup: 1,

    centeredSlides: true, 

    loop: true,

    breakpoints:{
        320:{
            slidesPerView: 1,
            initialSlide: 0
        },
        391:{
            slidesPerView: 1.66,
            initialSlide: 1
        }
    }
});