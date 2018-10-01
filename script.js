$(".owl-carousel").owlCarousel({
    nav:true,
    navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    margin:15,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
          
            nav:false
        },
       1000:{
        items:3,
       
            nav:true
        }
    }
});

$grid.isotope({ filter: '*' }

)



jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

//carousel
$("#team-car-slide").owlCarousel({
    nav:true,
    navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    margin:15,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
           
        }
    }
});


// event corusel =========================================================================================


    $("#owl").owlCarousel({
        nav:true,
        navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        margin:15,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:2,
                nav:true,
               
            }
        }
    });
    

    AOS.init();


// isotpeo=================================================================================================

// $(window).on('load', function() {
//     var $container = $('.work-filter');
//     var $filter = $('#menu-filter');
    
// 	$container.isotope({
// 		filter: '*',
// 		layoutMode: 'masonry',
// 		animationOptions: {
// 			duration: 750,
// 			easing: 'linear'
// 		}
// 	});
//     $filter.find('a').on("click", function() {
// 		var selector = $(this).attr('data-filter');
		
//         $filter.find('a').removeClass('active');
//         $(this).addClass('active');
//         $container.isotope({
//             filter: selector,
// 			animationOptions: {
// 				duration: 750,
// 				easing: 'linear'
// 			}
// 		});
		
//         return false;
// 	});
	
// });



// bwebwieub
$(document).ready(function(){

    var stiky = $('#navigation');
                
    $(window).on('scroll', function(){
        if($(window).scrollTop()>121){
             stiky.addClass('sticky');}
        else {stiky.removeClass('sticky');}
    });
   

$(window).on('load', function() {
    var $container = $('.work-filter');
    var $filter = $('#menu-filter');
    
	$container.isotope({
		filter: '*',
		layoutMode: 'masonry',
		animationOptions: {
			duration: 750,
			easing: 'linear'
		}
	});
    $filter.find('a').on("click", function() {
		var selector = $(this).attr('data-filter');
		
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear'
			}
		});
		
        return false;
	});
	
});


    //photo gallery
    $('.mag-pop').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
          }  
            
      });
    

})