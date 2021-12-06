import { render } from 'react-dom'
import {savedRecipes} from '../RecipesPage/Recipes'



let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today


let INITIAL_EVENTS = []
let eventTitle = [] 

/**
 * This function takes in the intial SavedRecipes array which is checked to ensure there are no duplicate 
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
  function getCalendarData(){
    let singleArray = createInitalArray(savedRecipes)
    // console.log(singleArray)
    let length = singleArray.length-1
      for(var i = 0; i <= length; i++){
          INITIAL_EVENTS[i]= 
            {
            id: createEventId(),
            title: singleArray[i],
            start: todayStr + ' 12:00:00'
          };
        }

    console.log(INITIAL_EVENTS)
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

export {INITIAL_EVENTS, getCalendarData,  createEventId}
