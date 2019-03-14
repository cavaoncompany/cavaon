

$(window).load(function() {

if( !device.tablet() && !device.mobile() ) {

		$('.animated').appear(function() {
		 $(this).each(function(){ 
		    $(this).css('visibility','visible');
		    $(this).addClass($(this).data('fx'));
		   });
		},{accY: -100});
						
	} 

	else {
			$('.animated').css("visibility","visible");
	}
});	


