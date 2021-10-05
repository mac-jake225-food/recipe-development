// import { UserProfile } from "./UserProfile";
import SpoonacularApi from './spoonacular';

/**
 * Main class
 * 
 * @author Katelyn Breen, created September 2021
 */

class Main{
    main(){
        //returnRecipe (input)
        //returns single recipe with the given parameters
            //prepTime
            //Cuisine
            //budget
            //nutrition
            //Type of dish(dinner,lunch, etc.)
            //Allergies/foods to avoid
        //will need to look at api documentation more before outlining steps
        //write functions for each parameter that can be called in this function

        /**
         * returns n recipes that the user has selected for their timeframe
         */
        //recipeList(n)
            //Create recipeList
            //for(i=0;i++;n)
                //recipe=returnRecipe(input)
                //add recipe to recipeList
            //return recipeList

        //groceryList(recipeList)
            //create groceryList
            //loop through recipeList
                //extract ingredients from recipe
                //add ingredient to groceryList
            //return groceryList

        //Calendar functions?

        //Store User info: database


        //template to run functions:
        // function add(a, b) {
        //     return a+b
        //     }
        // console.log(add(4, 6))
        //In terminal, direct to src, and enter node Main.js

        /**
         * test
         */
        let userProfileTest = new UserProfile("tenDays", "tenMin", "italian", "tenDollars", "highProtein", "dinner");

        console.log(userProfileTest.budget);
        userProfileTest.setBudget("elevenDollars");
        console.log(userProfileTest.budget);
        console.log(userProfileTest.getBudget());
        //bug: User profile not defined, won't return data
    }   
}


// let userProfileTest = new UserProfile("tenDays", "tenMin", "italian", "tenDollars", "highProtein", "dinner");

// console.log(userProfileTest.budget);
// userProfileTest.setBudget("elevenDollars");
// console.log(userProfileTest.budget);
// console.log(userProfileTest.getBudget());


//Questions:
// instantiate userProfile
// Database?

