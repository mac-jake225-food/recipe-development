import React, { Component } from "react";
import { render } from 'react-dom';
import { filteredRecipeData } from "../Profile/ProfileCuisine";
import { Linking } from 'react';
import { Text } from 'react'
import { TouchableOpacity } from 'react'

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

  generateRandomRecipeID = (a) => {
    if (filteredRecipeData!=undefined){
      recipeID = Math.floor(Math.random()*(filteredRecipeData.length-1));
    }
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
          this.generateRandomRecipeID(),
          this._showMessage.bind(null, typeof filteredRecipeData != 'undefined')
        }>
          Generate Recipes
          </button>
        { typeof filteredRecipeData == 'undefined' && <h1>Please fill out profile first</h1>}
      </div>

      <div>
      { this.state.showMessage && filteredRecipeData[recipeID].title}
      { this.state.showMessage && 
      <img
      src = {filteredRecipeData[recipeID].image.toString()}>
      </img>}
      </div>
  </div>
  
);}
}

export default Recipes;