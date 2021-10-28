import React from 'react';
import CalanderPic from './CalendarPic.png';
import Draggable from 'react-draggable';
import { RecipesParseIngredientsEstimatedCost } from '../../vendor/spoonacular_api/src/com.spoonacular.client';

function getRecipeNames(){
  var recipeNames = ["recipe 1", "recipe 2", "recipe 3", "recipe 4", "recipe 5", "recipe 6", "recipe 7", "recipe 8", "recipe 9"];
  let queue = [];
  const enqueue = (item) => queue.push(item);
  const dequeue = () => queue.shift();

  for (let index = 0; index < 5; index++) {
    enqueue(recipeNames[index]);
    displayRecipe(recipeNames[index])
  }
  let index=5;
  let drag = false;
  if (drag) {
    dequeue();
    enqueue(recipeNames[index])
    index++;
  }
  return(
    displayRecipe(recipeNames[0]),
    displayRecipe(recipeNames[1]),
    displayRecipe(recipeNames[2])
  )
}

function displayRecipe(string){
  return (
    <Draggable>
        <div>{string}</div>
    </Draggable>
  )
}
const Calendar = () => {
  let recipeNames = ["recipe 1", "recipe 2", "recipe 3", "recipe 4", "recipe 5", "recipe 6", "recipe 7", "recipe 8", "recipe 9"]
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <img src={CalanderPic} height={600} width={1200}/>

      <div id="draggable"></div>
      <script>$("#draggable").draggable();</script>
      {/* {displayRecipe("hooray!")} */}
      {/* {displayRecipe(recipeNames[0])} */}
      {getRecipeNames()}

    </div>
  );
};


export default Calendar;