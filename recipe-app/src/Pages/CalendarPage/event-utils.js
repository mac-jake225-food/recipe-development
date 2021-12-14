import { render } from 'react-dom'
import {savedRecipes, intializeData } from '../RecipesPage/Recipes'


let existingEvent = [] 

export function updateCalendarData(currentCalendarData, savedRecipes){
  //for each saved recipe, find existing calendar data
  //use start date, or make new one if it doesnt exist
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

export function getCalendarData(){
  savedEvents = updateCalendarData(savedEvents, savedRecipes);
  return savedEvents;
}

let savedEvents = updateCalendarData(existingEvent, savedRecipes)

export {savedRecipes, savedEvents}
