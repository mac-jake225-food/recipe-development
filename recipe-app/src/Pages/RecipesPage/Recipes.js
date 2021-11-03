import React, { Component } from "react";
import { render } from 'react-dom';
import { filteredRecipeData } from "../Profile/ProfileCuisine";
import { Linking } from 'react';
import { Text } from 'react'
import { TouchableOpacity } from 'react'

var recipeID;
var savedRecipes = [];

class Recipes extends Component{

  constructor() {
    super(); 
    this.state = { showItems: false }
  }

  _showItems = (bool) => {
    this.setState({
      showItems: bool
    });
  }
  
  generateRandomRecipeID = () => {
    if (filteredRecipeData!=undefined){
        recipeID = Math.floor(Math.random()*(filteredRecipeData.length-1));
      }
    }
  
    saveRecipe = () => {
      if (filteredRecipeData!=undefined){
        savedRecipes.push(filteredRecipeData[recipeID].title)
        console.log(savedRecipes)
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
    className = "recipe-page"
  >
      <div>
        <button 
        type="submit" className = "recipe-buttons"
        onClick={
          this.generateRandomRecipeID(),
          this.saveRecipe(),
          this._showItems.bind(null, typeof filteredRecipeData != 'undefined')
        }>
          Save Recipe
          </button>
          <button type="button" className = "recipe-buttons" onClick={
          this.generateRandomRecipeID(),
          this._showItems.bind(null, typeof filteredRecipeData != 'undefined')
        }>
          Get new recipe
          </button>
        { typeof filteredRecipeData == 'undefined' && 'Please fill out profile first'}
      </div>
      <div>
      { this.state.showItems && filteredRecipeData[recipeID].title}
      { this.state.showItems && 
      <img
      src = {filteredRecipeData[recipeID].image.toString()}>
      </img>}
      </div>
  </div>
  
);}
}

export {Recipes};