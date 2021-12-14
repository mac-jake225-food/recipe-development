import {savedRecipes, intializeData } from '../RecipesPage/Recipes'

/**
 * this varibale is a place holder which is used in updateCalendarData to initialize the event objects for movable events on calendar
 */
let existingEvent = [] 

/**
 * This method takes in the current calendar data from Recipe.js and savedRecipe api call and then maps eachs value in the API in order to create event objects that are 
 * redable by the calendar
 * @param {currentCalendarData} currentCalendarData -- the calendar data present  
 * @param {savedRecipes} savedRecipes 
 * @returns 
 */
export function updateCalendarData(currentCalendarData, savedRecipes){
  let defaultDate = new Date().toISOString().replace(/T.*$/, '') + ' 12:00:00' // YYYY-MM-DD of today
  
  return savedRecipes.map(recipe => {
    let existingEvent = currentCalendarData.find(event => event.id == recipe.id)
    return existingEvent || { 
      id: recipe.id,
      title: recipe.title,
      start: defaultDate 
    };
  });
}

  /**
   * This method calls updateCalendar in order to update savedEvents to the current most updated savedRecipes 
   * @returns savedEvents { calendar object }
   */
  export function getCalendarData(){
    savedEvents = updateCalendarData(savedEvents, savedRecipes);
    return savedEvents;
  }

  /**
   * this variable update savedEvents in order to update it with the most current savedRecipes 
   */
  let savedEvents = updateCalendarData(existingEvent, savedRecipes)

export {savedRecipes, savedEvents}
