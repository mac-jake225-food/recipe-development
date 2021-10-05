
/**
 * User Profile class, template object class
 * 
 * @author Katelyn Breen, created September 2021
 */

 class UserProfile {
    constructor(timeframe, preptime, cuisineType, budget, nutrition, dishType) {
      this.timeframe = timeframe;
      this.preptime = preptime;
      this.cuisineType= cuisineType;
      this.budget= budget;
      this.nutrition= nutrition;
      this.dishType= dishType /*For now only one type of dish type (dinner, breakfast, etc.)  
      can be chosen, but maybe later on we'll allow the user to mix and match*/
    }

    //getter methods

    getTimeframe(){
        return this.timeframe;
    }    

    getPreptime(){
        return this.preptime;
    }

    getCuisineType(){
        return this.cuisineType
    }

    getBudget(){
        return this.budget;
    }

    getNutrition(){
        return this.nutrition;
    }

    getDishType(){
        return this.dishType;
    }

    //setter methods

    setTimeframe(newTimeframe){
        this.timeframe=newTimeframe;
    }

    setPreptime(newPreptime){
        this.preptime=newPreptime;
    }

    setCuisineType(newCuisineType){
        this.cuisineType=newCuisineType;
    }

    setBudget(newBudget){
        this.budget=newBudget;
    }

    setNutrition(newNutrition){
        this.nutrition=newNutrition;
    }

    setDishType(newDishType){
        this.dishType=newDishType;
    }
}

// function test(){
//     const userProfileTest = new UserProfile("tenDays", "tenMin", "italian", "tenDollars", "highProtein", "dinner");
//     outputBudget= userProfileTest.budget;
//     return(outputBudget);
// }   
const userProfileTest = new UserProfile("tenDays", "tenMin", "italian", "tenDollars", "highProtein", "dinner");

console.log(userProfileTest.budget);
userProfileTest.setBudget("elevenDollars");
console.log(userProfileTest.budget);
console.log(userProfileTest.getBudget());



  