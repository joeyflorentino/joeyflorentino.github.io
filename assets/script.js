// $('.block img').on('mouseover', function(event){
//     $('.block img').not($(this)).addClass('hover');
// });

// $('.block img').on('mouseout', function(){
//     $('.block img').not($(this)).removeClass('hover');
// });

$('.works').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 1,
    dots: false,
    arrows: false,
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
    $('.slick-active video').trigger('play');
});

$('.works').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-active video').trigger("pause");
});

$(window).on('load', function() {		
	$('.slick-active video').trigger('play');
});