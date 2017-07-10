$(document).ready( function(){
	//La etapa 7 me pide que imprima un mensaje en la consola cuando el documento HTML este listo,
	//asi que pongo el console.log en esta seccion que ejecuta funciones cuando el documento recipe.html  esta "ready"
	console.log("Mi documento esta listo");

	/*Etapa 8: se asignan funciones que se ejecuten cuando el usuario hace click en las
	pestañas "Recipe" o "Make it"*/

	$(".js-show-recipe").click(function(){
		console.log("Recipe");
       $(".page.recipe").removeClass("make");
       $(this).addClass('active');
       $(".js-show-make").removeClass("active");
	})

	$(".js-show-make").click(function(){
		console.log("Make it");
       $(".page.recipe").addClass("make");
       $(this).addClass('active');
       $(".js-show-recipe").removeClass("active");
	})

	/* Este llamado no funciona para este ejercicio de Etapa 8
	$(".btns-group").on("click", $(".js-show-recipe"), function(e) {
		console.log("Recipe");
       $(".page.recipe").removeClass("make");
    });*/

});