$(document).ready( function(){
	//La etapa 7 me pide que imprima un mensaje en la consola cuando el documento HTML este listo,
	//asi que pongo el console.log en esta seccion que ejecuta funciones cuando el documento recipe.html  esta "ready"
	console.log("Mi documento esta listo");

	/*Etapa 8: se asignan funciones que se ejecuten cuando el usuario hace click en las
	pestañas "Recipe" o "Make it", ambas funciones son equivalente a:
	$(".js-show-recipe").click(function(){

	})*/

	$(".js-show-recipe").click(function(){
		console.log("Recipe");
       $(".page.recipe").removeClass("make");
	})

	$(".js-show-make").click(function(){
		console.log("Make it");
       $(".page.recipe").addClass("make");
	})
	/*
	$(".btns-group").on("click", $(".js-show-recipe"), function(e) {
		console.log("Recipe");
       $(".page.recipe").removeClass("make");
    });

	$(".btns-group").on("click", $(".js-show-make"), function(e) {
		console.log("Make it");
       $(".page.recipe").addClass("make");
    });*/

});