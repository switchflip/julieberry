var wrap = $('div.wrap');						// get div.wrap store as var = wrap
var href = $(this).attr('href');  				// gets click a addss .html


$(document).ready(function(){

  	  $.get(href, function(){

	  $('.nav a').on('click', function(e) { 			// when user clicks on function is run
	  wrap.load( href + ' .container'); 				// loads var href in .container

	  	e.preventDefault(); 							// pervents the a's default action
  	});



  	});
});