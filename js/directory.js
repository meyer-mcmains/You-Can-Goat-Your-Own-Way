$('.faculty').click(function () {
	$('.desc').toggle(200);
	if ($('.carrot').data('carrot') === true) {
		$('.carrot').css({'-webkit-transform' : 'rotate('+ 0 +'deg)',
                 '-moz-transform' : 'rotate('+ 0 +'deg)',
                 '-ms-transform' : 'rotate('+ 0 +'deg)',
                 'transform' : 'rotate('+ 0 +'deg)'});
		$('.carrot').data('carrot', false);
	}
	else {
		$('.carrot').css({'-webkit-transform' : 'rotate('+ 90 +'deg)',
                 '-moz-transform' : 'rotate('+ 90 +'deg)',
                 '-ms-transform' : 'rotate('+ 90 +'deg)',
                 'transform' : 'rotate('+ 90 +'deg)'});
		$('.carrot').data('carrot', true);
	}

});



