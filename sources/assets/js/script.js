$(function(){
	// acco1
	$('.acco1 .btn').on('click',function() {
		
		if ($(this).parent('li').hasClass('active')) {
			$(this).parent('li').removeClass('active')
		} else {
			$(this).parent('li').addClass('active')
		}

	})
});