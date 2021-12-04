import { render } from 'react-dom'
import {savedRecipes} from '../RecipesPage/Recipes'



let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today


let INITIAL_EVENTS = []
let eventTitle = [] 
var uniqueIDs = [{}] 
var finalEvents = [{}]
var idValue = []
var  titleValue = []
var startValue= []


function createInitalArray(initalArray){
  if(savedRecipes.length > 0){
      initalArray = checkforDuplicates(createSecondaryArray(savedRecipes, eventTitle))
      // console.log(initalArray)
    }
    return initalArray 
  }

  // this function takes in an array copy coverts it to a set , and then reverts it back to an array to prevent any duplicate set items 
  function checkforDuplicates(arrayCopy){
    let finalSetTitle = [...new Set(arrayCopy)];
    let finalArrayTitle = Array.from(finalSetTitle)
    return finalArrayTitle
    }

  // this function creates an array copy of the initail array and returns the array copy 
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

function createEventId() {
  return String(eventGuid++)
}

function addToCalendar(){
  let singleArray = createInitalArray(savedRecipes)
  // console.log(singleArray)
  let length = singleArray.length-1
    for(var i = 0; i <= length; i++){
      INITIAL_EVENTS.push( 
        {
        id: i,
        title: singleArray[i],
        start: todayStr
      });
    }
  var uniqueIDs = Array.from(new Set(INITIAL_EVENTS.map(a => a.id)))
 .map(id => {
   return INITIAL_EVENTS.find(a => a.id === id)
 })
  idValue = uniqueIDs.map((id) => {
      console.log(id.id)
    })
  titleValue = uniqueIDs.map((id) => {
    console.log(id.title)
  })
  startValue = uniqueIDs.map((id) => {
    console.log(id.start)
  })
  console.log(uniqueIDs)
  return idValue, titleValue, startValue
}

export {uniqueIDs, addToCalendar,  createEventId, createInitalArray, checkforDuplicates, idValue, titleValue, startValue}
