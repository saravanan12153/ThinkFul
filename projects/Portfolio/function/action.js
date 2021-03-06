/*---------------------------------------------------------------------------------

	Project Name: Portfolio
	Project Description: A ThinkFul Portfolio Site
	File Name: action.js
	Author: Jeya Karthika
	Author URI: http://www.freshsqueaks.com
	Version: 0.1
	
----------------------------------------------------------------------------------*/

$(document).ready(function(){

	//page slide to reveal modal navigation
	$(".open").pageslide({direction: "left", modal: true}); 

	//To auto close the navigation on selecting a menu item
	$('nav a').click(function() {
		$.pageslide.close();
	});

	$('nav a').on('click', function() {
	    var target = $(this).attr('href');
	    console.log(target);
	    $('html, body').animate({scrollTop:$(target).offset().top}, 2000);
	});

	
	//full page sliders
	$.fn.fullpage({
		resize : false,
		slidesColor: ['#FECC00', '#B6965C', '#FC575F', '#33C1C9'],
		slidesNavigation: true
	});

	
});

