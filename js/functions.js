//LOADER
$('html').append('<body><div id="space-loader"></div><div id="loader"></div></body>');
$(window).load(function(){
	$('#loader, #space-loader').fadeOut();
	$('body').fadeIn(500);
});