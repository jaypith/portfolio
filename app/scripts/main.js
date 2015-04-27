'use strict';

(function($) {
  $(document).ready(function() {
    // Add your jQuery code here

    $(function(){
  		$.scrollIt({
  			topOffset:-105
  		});
	});

    $('.GITheWall').GITheWall({
  	nextButtonClass: 'fa fa-arrow-right',
	prevButtonClass: 'fa fa-arrow-left',
	closeButtonClass: 'fa fa-times'
    });

    var wall = $('div.wall').GITheWall({
	  // Callbacks API
	  onBeforeInit: null,
	  onReady: null,
	  onViewPortUpdate: null,
	  onItemChange: null,
	  onDestroy: null,
	  onShow: null,
	  onHide: null,
	  onContentLoading: null,
	  onContentLoaded: null,
	  margin: {
	    top: 10,
	    bottom: 10
	  },
	  scrollerElm: null,
	  scrollOffset: 150,
	  // settings
	  arrows: true,
	  closebutton: true,
	  keyboardNavigation: true,
	  animationSpeed: 300,
	  autoscroll: true,
	  responsive: true,
	  initialWrapperHeight: 600,
	  dynamicHeight: true,
	});

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
			/*if ( $('#main_navigation li').css('display') == 'none' ) {*/
				$('#main_navigation li').css('display','inline-block');
				$('.mobi_nav_btn').removeClass('mobi_nav_btn_clicked');
						/*	} */
		}
	});


	$(window).resize(function(){
		if ($('.mobi_nav_btn').css('display') =='block'){
			if($('.mobi_nav_btn').hasClass('mobi_nav_btn_clicked') == false ){
				$('#main_navigation li').css('display','none');
			}
		}
	});





    //end
  });
})(jQuery);
