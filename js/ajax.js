$(document).ready(function(){


  var wrap = $('div.wrap'); 						// get div.wrap store as var = wrap
  $('.nav a').on('click', function(e) { 			// when user clicks on function is run
  	var href = $(this).attr('href');  				// gets click a adds .html
  	wrap.load( href + ' .container'); 				// loads var href in .container

  	e.preventDefault(); 							// pervents the a's default action

  	});
});