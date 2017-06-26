(function(){
	$('nav a, .quadro').mouseover(function(){
		$('.quadro').stop().fadeIn('fast');
	});
	$('nav a, .quadro').mouseleave(function(){
		$('.quadro').stop().fadeOut('fast');
	});
})();
