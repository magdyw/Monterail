
// ----------------------- MODAL BOX, CLOSING AND OPENING -----------------------  




	/* #PROFILE IS A LINK TO DISPLAY PERSON PROFILE*/
	$('.profile').click(function(){
			$("html, body").animate({ scrollTop: 0 }, "slow");

			$('.mask').addClass('mask-visible');
			$('.modal-nonvisible').addClass('modal-visible');
	});

	/* #X-CLOSE IS AN 'X' IN MODAL BOX CLOSING IT*/
	$('#x-button').click(function(){
	
			$('.mask').removeClass('mask-visible');
			$('.modal-nonvisible').removeClass('modal-visible');
	});







