import React, { Component } from "react";
import styled from "styled-components";
import { render } from 'react-dom';
import { filteredRecipeData } from "../Profile/ProfileCuisine";
import { Linking } from 'react';
import { Text } from 'react'
import { TouchableOpacity } from 'react'

var recipePosition;
var savedRecipes = [];
var currentRecipeName=null;

class Recipes extends Component{

  constructor() {
    super(); 
    this.state = { showItems: false }
    this._showItems=this._showItems.bind(this); //change _showItems to more descriptive variable
  }

  _showItems = (bool) => {
    this.setState({
      showItems: bool
    });
  }
  // _showItems(){
  //   this.setState(prevState=>({
  //     showItems:!prevState.showItems
  //   }))
  // }
  
  generateRandomrecipePosition = (recipeList) => {
    if (recipeList!=undefined){
        recipePosition = Math.floor(Math.random()*(recipeList.length-1));
        console.log("recipePosition 1: ",recipePosition)
      }
    }
  
    saveRecipe = () => {
      if (typeof filteredRecipeData!=undefined){
        console.log("recipePosition 2: ",recipePosition)
        savedRecipes.push(filteredRecipeData[recipePosition].title)
        console.log("running save recipe: ", savedRecipes)
      }

    }

    checkRecipePosition=()=>{
      console.log("recipePosition 3: ",recipePosition)
    }

    // handleClick(){
    //   this.checkRecipePosition() 
    //   this.generateRandomrecipePosition()
    //   this._showItems.bind(null, typeof filteredRecipeData != 'undefined')
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
      {/* <ButtonGroup className = "mb-2">
      
      </ButtonGroup> */}

        <button 
          type="button" className = "recipe-buttons"
          onClick={
            this.checkRecipePosition(),
            this.generateRandomrecipePosition(filteredRecipeData),
            this._showItems.bind(null, typeof filteredRecipeData != 'undefined')
    // 
          }>
            Get new recipe
        </button>



        <button 
        type="button 2" className = "recipe-buttons2"
        onClick={
          this.checkRecipePosition(), 
          this.saveRecipe(),
          this._showItems.bind(null, typeof filteredRecipeData != 'undefined')
        }>
          Save Recipe
          </button>

        { typeof filteredRecipeData == 'undefined' && 'Please fill out profile first'}
      </div>
      <div>
      { this.state.showItems && filteredRecipeData[recipePosition].title}
      { this.state.showItems && 
      <img
      src = {filteredRecipeData[recipePosition].image.toString()}>
      </img>}
      </div>
  </div>
  
);}
}

export {Recipes, savedRecipes};