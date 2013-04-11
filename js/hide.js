$(document).ready(function() {

	$('dd').filter(':nth-child(n+4)').addClass('hide');

    $('dt').on('click', function(){
        $(this).next()
            .slideDown(300, 'swing')
            .siblings('dd').slideUp(300, 'swing');
    });
});