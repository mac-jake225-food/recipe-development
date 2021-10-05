const unirest = require('unirest');

const API_KEY = "API_KEY";
const INGREDIENT_LIST = ['INGREDIENT_LIST'];

let requestString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/find" +
"ByIngredients?number=5&ranking=1&ingredients=";

const ingredientsString = INGREDIENT_LIST.map(ingredient => 
    ingredient + '%2C'
);

requestString = requestString + ingredientsString;

unirest.get(requestString)
.header("X-RapidAPI-Key",  API_KEY)
.end(result => {
    if (result.status === 200){
        getRecipeData(result.body);
    };
});

function getRecipeData(recipeList) {
    let idList = [];
    recipeList.map(recipe => 
        idList.push(recipe.id)
    );
    let recipeString = idList.join('%2C');
    let requestString = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=';
    requestString = requestString + recipeString
    unirest.get(requestString)
    .header("X-RapidAPI-Key", API_KEY)
    .end(result => {
         if(result.status === 200){
             result.body.map(result =>
                 console.log(
                     result.title + " -- " + "Weight Watchers Smart Points: " + 
                     result.weightWatcherSmartPoints + " -- Instructions: " + result.instructions
                 );
             );
         };
    });    
};