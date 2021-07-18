let owl_1item = $('.js-owl-1item');

owl_1item.each(function() {
    $(this).owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 500,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
        responsive:{
            0:{
                items:1,
                dots: true,
                nav: false,
            },
            481:{
                dots: false,
                nav: true,
                items:1,
            }
        }
    })
})