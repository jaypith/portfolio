'use strict';

(function($) {
  $(document).ready(function() {
    // Add your jQuery code here

    $('.mobi_nav_btn').on('click', function(eventObject) {
    	if ( $('#main_navigation li').css('display') === 'none' ) {
				$('#main_navigation li').slideDown()
			} 
			else {
				$('#main_navigation li').slideUp()
			}

	});



    //end
  });
})(jQuery);
