$(function(){
	// acco1
	$('.acco1 .btn').on('click',function() {
		let accoLi = $(this).parent('li'),
			className = 'active';
		if (accoLi.hasClass(className)) {
			accoLi.removeClass(className)
		} else {
			accoLi.addClass(className)
		}
	})

	// acco2
	$('.acco2 .btn').on('click',function() {
		let accoLi = $(this).parent('li'),
			accoAllLi = $(this).parents('.acco-wrap').find('li'),
			className = 'active';
		if (accoLi.hasClass(className)) {
			removeActive();
		} else {
			removeActive();
			accoLi.addClass(className);
		}		

		function removeActive(){
			accoAllLi.removeClass(className);
		}
	})

	//acco3
	$('.acco3 .btn').on('click',function() {
		if ($(this).parent('li').hasClass('active')) {

		} else {
			$(this).sibling().slideDown();
		}
		
	})
});