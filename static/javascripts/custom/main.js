// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: ODIN.
// Author: Designova.
// Website: http://www.designova.net 
// Copyright: (C) 2016 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();
     //Adjusting Intro Components Spacing based on detected screen resolution
     $('#intro, .full-height').css('height',vH);
     $('.full-width').css('width',vW);
     $('.half-height').css('height',vH/2);
     $('.rs-bg-img').css('max-height',vH);
     $('.rs-bg-img').css('max-width',vW);

    
     //percentage
     // var wrapWidth = vW;
     // var h1 = (wrapWidth * 17 / 100).toFixed(2);
     // $('.hero-caps h1').css('font-size',h1+'px');


//Equi-heigh Divs
$(document).ready(function() {

     var folioThumbHeight;
     $('.folio-thumb').each(function() {
      folioThumbHeight = $(this).height();
      $(this).find('.item_info').css('height',folioThumbHeight+3);
     });
   
   
  if(vW > 1000)
  {
   var maxHeight = -1;

   $('.equal-height-one').each(function() {
     maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
   });

   $('.equal-height-one').each(function() {
     $(this).height(maxHeight);
   });

}

 });

//Preloader
    $("#status").fadeOut();
    // will fade out the whole DIV that covers the website.
    $("#preloader").delay(1000).fadeOut(1000);
    $('body').removeClass('preloader-running');
    $('body').addClass('preloader-done');
    $("#ajax-content").delay(1000).css('opacity', '1');
    


        //Mobile Only Navigation (multi level)
        $('ul.slimmenu').slimmenu({
            resizeWidth: '1200',
            collapserTitle: '',
            easingEffect: 'easeInOutQuint',
            animSpeed: 'medium',
        });

        $('.slimmenu li a').on('click',function(){
                    $('ul.slimmenu').removeClass('expanded').slideUp();
        })



//Text Ticker
 $(window).load(function(){
        $('.text-rotator').each(function(){
            
            var text_rotator_content = $(this).html();
            $(this).empty();
            $(this).html('<div class="rotator-wrap"></div>')
            var this_item = $(this).children('.rotator-wrap');
            var text_rotator_content_split = text_rotator_content.split(',');
            var item_size = text_rotator_content_split.length;
            nova_text_rotator(text_rotator_content_split, this_item, item_size);
        });
        
        function nova_text_rotator(item_array, this_item, item_size, my_index){
            
            if(my_index == undefined)
                var my_index = -1;

            my_index++

            if(my_index < item_size)
            {

                this_item.fadeOut(800, function(){
                    this_item.html('<span>'+ item_array[my_index] +'</span>');
                    this_item.fadeIn(800);
                    
                });
            }
            else
            {
                my_index = -1;
            }

            setTimeout(function() {
                 nova_text_rotator(item_array, this_item, item_size, my_index);
            }, 3750);
        }
    });  

    //Features Switching - State Change
    $('.features-icon').click(function(){
          $('.features-icon').removeClass('current');
          $(this).addClass('current');
    })

    $("#intro-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: true,
        autoHeight: true,
        transitionStyle : "goDown"
      });


    $("#intro-statistics-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: true,
        autoHeight: true,
        transitionStyle : "backSlide"
      });

    $("#intro-agency-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: true,
        autoHeight: true
      });


    $("#intro-photography-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: true,
        autoHeight: true,
        slideSpeed: 100,
        transitionStyle : "fadeUp"
      });


    $("#intro-parallax-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: true,
      });
      
    $("#projects-carousel").owlCarousel({
        navigation : false,
        pagination: true,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: true,
      });

    $("#thumb-carousel").owlCarousel({
        navigation : false,
        pagination: false,
        responsive: true,
        items: 3,
        touchDrag: true,
        mouseDrag: true,
        itemsDesktop: [5000,8],
        itemsDesktopSmall: [1440,4],
        itemsTablet:[800,3],
        itemsTabletSmall: [600,2],
        itemsMobile: [360,1],
        autoPlay: true
      });
    $("#project-page-carousel").owlCarousel({
        navigation : false,
        pagination: true,
        responsive: true,
        items: 1,
        touchDrag: true,
        mouseDrag: true,
        itemsDesktop: [5000,2],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[800,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: true
      });

    $("#process-carousel").owlCarousel({
        navigation : false,
        pagination: true,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,3],
        itemsDesktopSmall: [1440,3],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: false,
      });



    $("#testimonial-carousel").owlCarousel({
        navigation : false,
        pagination: true,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: true,
      });



    $("#team-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,3],
        itemsDesktopSmall: [1440,3],
        itemsTablet:[1024,3],
        itemsTabletSmall: [640,1],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: false,
      });


    $("#client-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,4],
        itemsDesktopSmall: [1440,4],
        itemsTablet:[1024,3],
        itemsTabletSmall: [600,2],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: true,
      });



    $("#project-carousel").owlCarousel({
        navigation : false,
        pagination: false,
        responsive: true,
        items: 2,
        touchDrag: true,
        mouseDrag: true,
        itemsDesktop: [5000,8],
        itemsDesktopSmall: [1440,3],
        itemsTablet:[800,2],
        itemsTabletSmall: [600,2],
        itemsMobile: [360,1],
        autoPlay: true
      });

    //Parallax
    

if( !device.tablet() && !device.mobile() ) {

        /* if non-mobile device is detected*/ 
              // Parallax Init
              $('.parallax').each(function() {
                    $(this).parallax('0', -0.3, true);
                });
                        
        } else {
            
            /* if mobile device is detected*/ 
            $('.slide').addClass('parallax-off');
        }




    //Venobox Responsive Lightbox
    $('.venobox, .image-lightbox-link').venobox({
    numeratio: true
    }); 

        //Portfolio Engine
    $('#grid').mixitup({
      transitionSpeed : 800
    });



    //Portfolio Filter Active State
    $('ul#portfolioFilter li').click(function(){
      $('ul#portfolioFilter li').removeClass('active-filter');
      $(this).addClass('active-filter');
    });


    //Highlight the navigation on focusing a section
   $('.standard-nav li > a').click(function(){
        $('.standard-nav li > a').removeClass('highlighted');
        $(this).addClass('highlighted');
    });
    $('.page, .intro').mouseenter(function(){
        var sectionId = $(this).attr('id');
        $('.standard-nav li > a').removeClass('highlighted');
        $('#'+sectionId+'-linker').addClass('highlighted');
    });

    //Setup waypoints plugin
    $('.page').first().waypoint(function (event, direction) {

        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
          $('.standard-header').slideDown();
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
          $('.standard-header').slideUp();
        }

    }, { offset: 100 });


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

