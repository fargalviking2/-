$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
	});
	$('.header__burger').click(function(event){
		$('.header__burger,.header__items').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//arrows:(true п.у/false)- наличие и отсутствие стрелок
//dots:(true/false)- точки переключения слайдов
//adaptiveHeight:true-чтобы заработалобнадо задать align-items:flex-start для stick-track