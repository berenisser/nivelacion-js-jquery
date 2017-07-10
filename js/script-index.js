$(document).ready( function(){

	//cree una clase nueva para la flecha para poder ocultarla
	$(".flecha-menu").hide();

	//cree una clase nueva para el menu para poder ocultarla
	$(".menu-icono").hide();

	//A la etiqueta p se le agrega una clase nueva, y dentro de la funcion se utiliza la funcion .html()
	//para que imprima el texto deseado
	function printNews(){
		$(".print-news").html("NUEVAS RECETAS");
	}
	//se necesita llamar a la funcion para que se refleje el camnio
	printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

	var newRecipeArray = $.grep(recipesArray, function(e) {
	    return e.highlighted == true;
	});

	console.log(newRecipeArray);
	renderRecipe(newRecipeArray);

}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


