
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

    	//Detecting viewpot dimension
     	var vH = $(window).height();
     	var vW = $(window).width();


     	//Detecting some elements dimension
     	var fiW = $('.features-icon').width();
     	var fiwW = $('.container').width();	


     	//Detecting mobile device (real platform detection - more accurate)
	if( !device.tablet() && !device.mobile() ) {

		/*  if non-mobile device is detected*/ 
						
	} else {
			
		/*  if mobile device is detected*/ 
	}


	//Detecting mobile device (viewport width detection)
	if(vW <= 800) {

		/*  if mobile viewport width is detected*/ 
		$('.features-icon .customLink').click(function(){
    			$('html, body').animate({scrollTop: ($('.features-details').offset().top-30)});
    		})
						
	} else {
		

		/*  if non-mobile viewport width is detected*/ 
    		
	}
   		
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

