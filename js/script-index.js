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
	renderActivities(activitiesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

	//La funcion .grep() es muy parecida a filter()
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

	recipe.forEach(function(element){
            var title = element.title;
            var author = element.source.name;
            $(".list-recipes").append('<a class="item-recipe" href="#">'+
            	'<span class="attribution">'+
	            	'<span class="title-recipe"> '+title+' </span> '+
	            	'<span class="metadata-recipe"> '+
		            	'<span class="author-recipe"> '+author+' </span> '+
		            	'<span class="bookmarks-recipe"> '+
		            		'<span class="icon-bookmark"></span> '+
	            		'</span> '+
	            	'</span> '+
            	'</span>'+
            	'<img src="img/recipes/320x350/'+element.name+'.jpg"/>'+
            	'</a>');    
    });
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	//Cuando reviso la consola me indica que el arreglo activitiesArray tiene un solo objeto, por lo tanto no es necesario recorrer el arreglo
	console.log(activitiesArray.length);
	//Validacion del arreglo activitiesArray si es mayor que 0
	if(activitiesArray.length > 0){
		$(".wrapper-message").hide();
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


