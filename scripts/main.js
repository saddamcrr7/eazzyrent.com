var testimonialsSlider = new Swiper('.o-testimonials__slider-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 28.5,
    wrapperClass: 'o-testimonials__slider-wrapper',
    slideClass: 'o-testimonials__slider-item',
    slideActiveClass: 'o-testimonials__slider-item--slide-active',
    pagination: {
        el: '.o-testimonials__slider-pagination',
        clickable: true,
    }
});