$(function(){
	// accordion
	let accoLi = $(".acco li"),
		accoBtn = $(".acco .acco-btn a");
	
	accoBtn.on('click',function(e){
		e.preventDefualt;

		let $this = $(this);
		$this.coloset(accoLi).hasClass("active");
		
		let hasActive = $(this).hasClass("active");

		
	})
});