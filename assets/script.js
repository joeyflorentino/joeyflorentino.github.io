// $('.block img').on('mouseover', function(event){
//     $('.block img').not($(this)).addClass('hover');
// });

// $('.block img').on('mouseout', function(){
//     $('.block img').not($(this)).removeClass('hover');
// });

// $(window).on('resize load', function() {
//     var win = $(this);
//     if (win.width() <= 720) {
//         $('.works').slick('unslick');
//     } else {
//         $('.works').slick({
//             centerMode: true,
//             centerPadding: '20px',
//             slidesToShow: 1,
//             dots: true,
//             appendDots: $('.works-container').find('.dots'),
//             arrows: false,
//             infinite: false,
//             mobileFirst: true,
//             responsive: [
//                 {
//                 breakpoint: 1300 - 1,
//                 settings: {
//                         centerPadding: '180px',
//                         slidesToShow: 1
//                     }
//                 },
//                 {
//                 breakpoint: 720,
//                 settings: {
//                         centerPadding: '80px',
//                         slidesToShow: 1
//                     }
//                 }
//             ]
//         });
//     }
// });

$('.works').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 1,
    dots: true,
    appendDots: $('.works-container').find('.dots'),
    arrows: false,
    infinite: false,
    mobileFirst: true,
    responsive: [
        {
        breakpoint: 1300 - 1,
        settings: {
                centerPadding: '180px',
                slidesToShow: 1
            }
        },
        {
        breakpoint: 720,
        settings: {
                centerPadding: '80px',
                slidesToShow: 1
            }
        }
    ]
});




$('.works').on('afterChange', function(event, slick, currentSlide){
    $('.slick-current video').trigger('play');
});

$('.works').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-current video').trigger("pause");
});

$('.works').on('wheel', (function(e) {
    e.preventDefault();
    if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickPrev');
    } else {
    $(this).slick('slickNext');
    }
}));

$(window).on('load', function() {		
	$('.slick-current video').trigger('play');
});