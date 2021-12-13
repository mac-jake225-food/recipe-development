import { render } from 'react-dom'
import {savedRecipes} from '../RecipesPage/Recipes'



let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today


let INITIAL_EVENTS = []
let eventTitle = [] 

/**
 * This function takes in the initial SavedRecipes array which is checked to ensure there are no duplicate 
 * recipes which is then returned to our intial array varible 
 * @param {*} initalArray 
 * @returns initalArray
 */
function createInitalArray(initalArray){
  if(savedRecipes.length > 0){
      initalArray = checkforDuplicates(createSecondaryArray(savedRecipes, eventTitle))
      // console.log(initalArray)
    }
    return initalArray 
  }

  /**
   * This function takes in an array and then creates a set from that array to ensure no duplicate values are present
   * @param {*} arrayCopy 
   * @returns finalArrayTitle
   */
  function checkforDuplicates(arrayCopy){
    let finalSetTitle = [...new Set(arrayCopy)];
    let finalArrayTitle = Array.from(finalSetTitle)
    return finalArrayTitle
    }


  /**
   * This function takes in two arrays (savedRecipes and an empty array), then a copy is made from the original array to the copy array which is finally returned
   * @param {*} array 
   * @param {*} arrayCopy 
   * @returns finalArrayTitle
   */
  function createSecondaryArray(array, arrayCopy){
    let finalArrayTitle = []
    let concatArray = arrayCopy.concat(array)
    for (let title in concatArray){
      if(concatArray.includes(concatArray[title].title, title)){
        return 
      }else {
        finalArrayTitle = finalArrayTitle.concat(concatArray[title].title)
        // console.log(finalArrayTitle, ' array')
      }
    }
    return finalArrayTitle
  }

  /**
   * This function increments our eventID
   * @returns String(eventGuid++)
   */
  function createEventId() {
    return String(eventGuid++)
  }


  /**
   * This function gets the intial array with no duplicates and then iterates through the length of the array which then adds them to our INITAL_EVENTS
   * with keys as id, title, start 
   * @returns INITIAL_EVENTS
   */
  //take existing calendar as input, use to get event id and start time
  // make new calendar array with saved recipes
  function getCalendarData(){
    let singleArray = createInitalArray(savedRecipes)
    // console.log(singleArray)
    let result = [];
    let length = singleArray.length-1
    for(var i = 0; i <= length; i++){
      result[i]= 
          {
          id: createEventId(),
          title: " " + singleArray[i],
          start: todayStr + ' 12:00:00'
        };
      }

    console.log(result)
    return result
  }

  /**
   * This function takes in a key and an array which is then iterated over to find the desired key.
   * @param {nameKey} nameKey 
   * @param {initialEvents} intialEvents 
   * @returns The index of the element that was searched for
   */
  function search(nameKey, intialEvents){
    for (var i=0; i < intialEvents.length; i++) {
        if (intialEvents[i].title === nameKey) {
          console.log(intialEvents[i].title)
            return intialEvents[i].title;
        }
    }
  }

  /**
   * This function takes in an array and index and filters through the array to find all keys that do not match that index
   * @param {array} array 
   * @param {idValue} idValue 
   * @returns each key element that does not match the id value 
   */
  function removeEvent(idValue) {   
    INITIAL_EVENTS = INITIAL_EVENTS.filter(function(ele){ 
        return ele.title != idValue; 
    });
    return INITIAL_EVENTS
}


// function getIDs(){
//   getCalendarData()
//   var finalEvents = INITIAL_EVENTS.map(event => event.id)
// }
// function getTitles(){
//   var titleValue = INITIAL_EVENTS.map((id) => {
//     return id.title
//   })
// }

// function getTimes(){
//   var timesValue = INITIAL_EVENTS.map((id) => {
//     return id.start
//   })
// }

export {INITIAL_EVENTS, getCalendarData,  createEventId, search, removeEvent, savedRecipes}
