(function() {
	                var wrap = $('div.wrap');

	                $('.nav a').on('click', function( e ) {
	                    var href = $(this).attr('href');

	                    wrap.load( href + ' .container' );



	                    e.preventDefault();
	                });
	            })();
