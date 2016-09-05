(function(){
	$('nav a').hover(function(){
		$('.quadro').stop().slideToggle('fast');
	});

	var maxH = 0;
	$(".quadro").each(function(i) {
		var actH = $(this).height();
		if(actH > maxH) maxH = actH;
	});
	$(".quadro").height(maxH);
})();