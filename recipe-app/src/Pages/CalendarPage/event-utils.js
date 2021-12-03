import { render } from 'react-dom'
import {savedRecipes} from '../RecipesPage/Recipes'



let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today


let INITIAL_EVENTS = []
let copyArray = [] 
copyArray = savedRecipes



function addToCalendar(){
  if(savedRecipes.length > 0){
    for(let i = 0; i < savedRecipes.length-1; i++){
      if(INITIAL_EVENTS.includes(savedRecipes[i].title) === true){
        console.log(savedRecipes[i].title, "hi")
        i++;
        break;
      } else {
        console.log(i)
        INITIAL_EVENTS.push(
          {
          id: createEventId(),
          title: ' ' + savedRecipes[i].title,
          start: todayStr
        })
      }
      }
      console.log(INITIAL_EVENTS)
    }
}
addToCalendar(); 

function createEventId() {
  return String(eventGuid++)
}

export {INITIAL_EVENTS, createEventId, addToCalendar}
