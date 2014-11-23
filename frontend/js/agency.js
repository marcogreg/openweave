/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$("#slider .items").owlCarousel({

        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigation: false,
        autoPlay: true
});
$(document).ready(function(e) {	
	
	var controller = $.superscrollorama();
			// individual element tween examples
			controller.addTween('#services', TweenMax.from( $('#services'), .5, {css:{opacity: 0}}));
			controller.addTween('#portfolio', TweenMax.from( $('#portfolio'), .5, {css:{opacity: 0}}));
			controller.addTween('#about', TweenMax.from( $('#about'), .5, {css:{opacity: 0}}));
			controller.addTween('#team', TweenMax.from( $('#team'), .5, {css:{opacity: 0}}));	
			controller.addTween('#clients', TweenMax.from( $('#clients'), .5, {css:{opacity: 0}}));		

			
			controller.addTween($('#info1'), TweenMax.from( $('#info1'), .25, {delay:Math.random()*.2,css:{opacity:0}, ease:Expo.easeOut}),200);
			controller.addTween($('#info2'), TweenMax.from( $('#info2'), .25, {delay:Math.random()*.2,css:{opacity:0}, ease:Expo.easeOut}),200);
			controller.addTween($('#info3'), TweenMax.from( $('#info3'), .25, {delay:Math.random()*.2,css:{opacity:0}, ease:Expo.easeOut}),200);
			controller.addTween($('#info4'), TweenMax.from( $('#info4'), .25, {delay:Math.random()*.2,css:{opacity:0}, ease:Expo.easeOut}),200);
			controller.addTween($('#info5'), TweenMax.from( $('#info5'), .25, {delay:Math.random()*.2,css:{opacity:0}, ease:Expo.easeOut}),200);
			controller.addTween($('#info6'), TweenMax.from( $('#info6'), .25, {delay:Math.random()*.2,css:{opacity:0}, ease:Expo.easeOut}),200);
			controller.addTween($('#info7'), TweenMax.from( $('#info7'), .25, {delay:Math.random()*.2,css:{opacity:0}, ease:Expo.easeOut}),200);
			

			//controller.addTween('#info1', TweenMax.from( $('#info1'), .5, {delay:Math.random()*.2, {css:{opacity: 0}}}));	
	// scrollorama	
});