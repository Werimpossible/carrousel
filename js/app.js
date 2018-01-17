// Version de ejercicio de pagina web

// $(window).load (function() {
// 	var theImage = $('ul li img');
// 	var theWidth = theImage.width()
// 	//wrap into mother div
// 	$('ul').wrap('<div id="mother" />');
// 	//assign height width and overflow hidden to mother
// 	$('#mother').css({
// 		width: function() {
// 		return theWidth;
// 	  },
// 		height: function() {
// 		return theImage.height();
// 	  },
// 		position: 'relative',
// 		overflow: 'hidden'
// 	});
// 		//get total of image sizes and set as width for ul
// 	var totalWidth = theImage.length * theWidth;
// 	$('ul').css({
// 		width: function(){
// 		return totalWidth;
// 	}
// 	});
// });//doc ready


//  ============Version Silvana ==========

// Debes poner siempre esta primera linea para cargar la página
$(document).ready(function(){
	var $botones = $(".control")
	console.log($botones);
	$botones.click(cargarImagen);
})


var cargarImagen = function (){
	var $target = $(this).data("target");
	var $ActualSlide = $("div.active");
}


