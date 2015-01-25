$(document).ready(function(){
          $('.main-slick').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows:true,
            autoplay: true,
            autoplaySpeed: 6000,
            asNavFor: '.slider-nav',  
            responsive: [
            {
              breakpoint:768,
                settings:{
                  arrows:false}
              }
            ]   
          });

          $('.slider-nav').slick({
            asNavFor: '.main-slick',
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            arrows:false,
          });
});