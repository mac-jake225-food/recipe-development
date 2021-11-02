import React, { Component } from "react";
import { render } from 'react-dom';
import { filteredRecipeData } from "../Profile/ProfileCuisine";

var recipeID;

class Recipes extends Component{

  constructor() {
    super(); 
    this.state = { showMessage: false }
  }

  _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  // handleClick=()=>{
  //   if(typeof filteredRecipeData == 'undefined'){
  //   this.message = "Fill out profile first"
  // }
  //   else{
  //     this.message = filteredRecipeData[Math.floor(Math.random()*(filteredRecipeData.length-1))].title
  //   }
  // }

render(){  
  return (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh'
    }}
  >
    <div>

        <button onClick={
          
          this._showMessage.bind(null, typeof filteredRecipeData != 'undefined')
        }>
          Generate Recipes
          </button>
        { typeof filteredRecipeData == 'undefined' && <h1>Please fill out profile first</h1>}
        { this.state.showMessage && ((filteredRecipeData[Math.floor(Math.random()*(filteredRecipeData.length-1))].title))}

      
      </div>
  </div>
  
);}
}

export default Recipes;