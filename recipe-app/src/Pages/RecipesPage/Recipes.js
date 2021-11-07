
import React, { Component } from "react";
import styled from "styled-components";
import { render } from 'react-dom';
import { filteredRecipeData } from "../Profile/ProfileCuisine";
import { Linking } from 'react';
import { TouchableOpacity } from 'react'
import { Text } from 'react'

var recipePosition;
var savedRecipes = [];

class Recipes extends Component{

  constructor(props) {
    super(props); 
    this.state = { buttonClicked: false }
    this.handleClick=this.handleClick.bind(this); 
  }

  handleClick() {
    this.setState(prevState=>({
      buttonClicked: !prevState.buttonClicked
    }));
  }

  testButtonWorks() {
    console.log("works")
  }

  // handleClick(){
  //   this.setState(prevState=>({
  //     buttonClicked:!prevState.buttonClicked
  //   }))
  // }

  generateRandomrecipePosition() {
    if (filteredRecipeData!=undefined){
        recipePosition = Math.floor(Math.random()*(filteredRecipeData.length-1));
      }
    }

//   generateRandomrecipePosition = (recipeList) => {
//     if (recipeList!=undefined){
//         recipePosition = Math.floor(Math.random()*(recipeList.length-1));
//         console.log("recipePosition 1: ",recipePosition)
//       }
//     }

//     checkRecipePosition=()=>{
//       console.log("recipePosition 3: ",recipePosition)
//     }

    saveRecipe () {
      if (filteredRecipeData!=undefined){
        savedRecipes.push(filteredRecipeData[recipePosition].title)
        console.log(savedRecipes)
      }
    }

  //     // handleClick(){
//     //   this.checkRecipePosition() 
//     //   this.generateRandomrecipePosition()
//     //   this.handleClick.bind(null, typeof filteredRecipeData != 'undefined')
//     // }

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
        type="button" className = "recipe-buttons" 
        onClick={
            this.handleClick.bind(null),
            this.generateRandomrecipePosition()
          }>
            Get new recipe
          </button>

        <button 
        type="submit" className = "recipe-buttons"
        onClick={          
          this.handleClick.bind(null),
          this.saveRecipe()
        }>
          Save Recipe
          </button>

      { typeof filteredRecipeData == 'undefined' && 'Please fill out profile first'}
      </div>
      
      <div>
      { this.state.buttonClicked && filteredRecipeData[recipePosition].title}

      { this.state.buttonClicked && 
      <img
      src = {filteredRecipeData[recipePosition].image.toString()}>
      </img>}

      </div>
  </div>

);}
}

export {Recipes, savedRecipes};