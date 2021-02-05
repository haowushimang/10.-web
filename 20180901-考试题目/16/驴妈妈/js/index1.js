$(function(){
	$('.happyfixdmfix:first').show();
	//度周末开始===========================
	$('.hpaayfix .bt').click(function(event) {
		var i=$(this).index();
		$(this).addClass('current');
		$('.happyfixdmfix').eq(i).show();
	});
	//度周末结束===========================
})