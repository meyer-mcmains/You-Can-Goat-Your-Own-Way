$('.1').click(function () {
	$('#1').toggle(200);
	if ($('#4').data('carrot') === true) {
		$('#4').css({'-webkit-transform' : 'rotate('+ 0 +'deg)',
                 '-moz-transform' : 'rotate('+ 0 +'deg)',
                 '-ms-transform' : 'rotate('+ 0 +'deg)',
                 'transform' : 'rotate('+ 0 +'deg)'});
		$('#4').data('carrot', false);
	}
	else {
		$('#4').css({'-webkit-transform' : 'rotate('+ 90 +'deg)',
                 '-moz-transform' : 'rotate('+ 90 +'deg)',
                 '-ms-transform' : 'rotate('+ 90 +'deg)',
                 'transform' : 'rotate('+ 90 +'deg)'});
		$('#4').data('carrot', true);
	}

});

$('.2').click(function () {
	$('#2').toggle(200);
	if ($('#5').data('carrot') === true) {
		$('#5').css({'-webkit-transform' : 'rotate('+ 0 +'deg)',
                 '-moz-transform' : 'rotate('+ 0 +'deg)',
                 '-ms-transform' : 'rotate('+ 0 +'deg)',
                 'transform' : 'rotate('+ 0 +'deg)'});
		$('#5').data('carrot', false);
	}
	else {
		$('#5').css({'-webkit-transform' : 'rotate('+ 90 +'deg)',
                 '-moz-transform' : 'rotate('+ 90 +'deg)',
                 '-ms-transform' : 'rotate('+ 90 +'deg)',
                 'transform' : 'rotate('+ 90 +'deg)'});
		$('#5').data('carrot', true);
	}

});

$('.3').click(function () {
	$('#3').toggle(200);
	if ($('#6').data('carrot') === true) {
		$('#6').css({'-webkit-transform' : 'rotate('+ 0 +'deg)',
                 '-moz-transform' : 'rotate('+ 0 +'deg)',
                 '-ms-transform' : 'rotate('+ 0 +'deg)',
                 'transform' : 'rotate('+ 0 +'deg)'});
		$('#6').data('carrot', false);
	}
	else {
		$('#6').css({'-webkit-transform' : 'rotate('+ 90 +'deg)',
                 '-moz-transform' : 'rotate('+ 90 +'deg)',
                 '-ms-transform' : 'rotate('+ 90 +'deg)',
                 'transform' : 'rotate('+ 90 +'deg)'});
		$('#6').data('carrot', true);
	}

});


