$(function(){
	// accordion
	let accoLi = $(".acco li"),
		accoBtn = $(".acco .acco-btn a");
	
	accoBtn.on('click',function(e){
		e.preventDefualt;

		let $this = $(this),
			active = $this.coloset(accoLi).hasClass("active");
		
		if(active) {
			$this.coloset(accoLi)
		}

		
	})
});