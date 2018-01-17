
//  ============Version Silvana ==========
//Esta variable se ubicó globalmente porque se utilizara en cada una de las funciones posteriores.	
var target = 0;

	// Debes poner siempre esta primera linea para cargar la página
$(document).ready(function(){
	var $botones = $(".control")
	$botones.click(cargarImagen);
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

//Para cambiar color del circulo conforme cambiamos de imagen
var changeColorButton = function (target) {
	// Extraemos la linea de HTML donde esta el boton
	var $actualButton = $("button.active");
	var $newButton = $("button[data-target=" + target + " ]");
	$actualButton.removeClass("active");
	$newButton.addClass("active");
}

//Para cambiar la imagen haciendo click en los controles laterales
var skipImage = function (target) {
	
}