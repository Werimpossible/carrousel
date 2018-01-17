
//  ============Version Silvana ==========

// Debes poner siempre esta primera linea para cargar la página
$(document).ready(function(){
	var $botones = $(".control")
	// console.log($botones);
	var $titulo = $("h1");
	$botones.click(cargarImagen);
	var target = 0;
})


var cargarImagen = function (){
	var $target = $(this).data("target");
	mostrarImagen($target);
	changeColorButton($target);
}

// Para cambiar las imagenes
var mostrarImagen = function (target) {
	// Extraemos el div del html donde contenemos a las imagenes
	var $actualSlide = $("div.active");
	var $newImage = $("div[data-slide=" + target + "]");
	$actualSlide.removeClass("active");
	$newImage.addClass("active");
}

//Para cambiar color de botón como cambiamos de imagen
var changeColorButton = function (target) {
	// Extraemos la linea de HTML donde esta el boton
	var $actualButton = $("button.active");
	var $newButton = $("button[data-target=" + target + " ]");
	$actualButton.removeClass("active");
	$newButton.addClass("active");

}