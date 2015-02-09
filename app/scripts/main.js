'use strict';

(function($) {
  $(document).ready(function() {
    // Add your jQuery code here
    $('.main-slick').toggleClass('unloading2');


    $('.mobi_nav_btn').on('click', function(eventObject) {
    	if ( $('#main_navigation li').css('display') == 'none' ) {
				$('#main_navigation li').slideDown()
				$(this).toggleClass('mobi_nav_btn_clicked');
			} 
			else {
				$('#main_navigation li').slideUp()
				$(this).toggleClass('mobi_nav_btn_clicked');
			}

	});


	$(window).resize(function(){
		if ($('nav').css('float') == 'right' ){
			if ( $('#main_navigation li').css('display') == 'none' ) {
				$('#main_navigation li').css('display','inline-block');
							} 
		}
	});


	



    //end
  });
})(jQuery);
