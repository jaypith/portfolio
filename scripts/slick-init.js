'use strict';

(function($) {

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

            $('.nav01').slick({
              asNavFor: '.slick01',
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
              centerMode: true,
              focusOnSelect: true,
              arrows:false,
            });

          

            $('.nav02').slick({
              asNavFor: '.slick02',
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
              centerMode: true,
              focusOnSelect: true,
              arrows:false,
            });
  });
 
})(jQuery);
