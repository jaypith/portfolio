$(document).ready(function(){
          $('.main-slick').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows:false,
            autoplay: true,
            autoplaySpeed: 6000,
            asNavFor: '.slider-nav'     
          });

          $('.slider-nav').slick({
            asNavFor: '.main-slick',
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            arrows:false,
          });
});