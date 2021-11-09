
import React, { Component } from "react";
import styled from "styled-components";
import { render } from 'react-dom';
import { filteredRecipeData } from "../Profile/ProfileCuisine";
import { Linking } from 'react';
import { TouchableOpacity } from 'react'
import { Text } from 'react'

var savedRecipes = [];

class Recipes extends Component{

  constructor(props) {
    super(props); 
    this.state = { buttonClicked: false }
    this.handleClick=this.handleClick.bind(this); 
  }

  handleClick=(event) =>{
    event.preventDefault(); //might not be necessary
    this.setState({buttonClicked:true});
  }

  saveRecipe (position) {
    console.log("input position: ", position)
    if (filteredRecipeData!=undefined){
        savedRecipes.push(filteredRecipeData[position].id)
        console.log(savedRecipes)
    }
    else{
      console.log("undefined")
    }
  }

render(){  
  if(filteredRecipeData!=undefined){
    var recipePosition=Math.floor(Math.random()*(filteredRecipeData.length-1));
    console.log("render recipe position", recipePosition)
  }

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
        onClick={()=>
            this.generateRandomrecipePosition,
            this.handleClick
          }>
            Get new recipe
          </button>

        <button 
        type="submit" className = "recipe-buttons"
        onClick={()=>      
          this.saveRecipe(recipePosition)
        }>
          Save Recipe
          </button>

      { typeof filteredRecipeData == 'undefined' && 'Please fill out profile first'}
      </div>

      <div>
        
      { this.state.buttonClicked &&  typeof filteredRecipeData != 'undefined' && filteredRecipeData[recipePosition].title}

      { this.state.buttonClicked &&  typeof filteredRecipeData != 'undefined' &&
      <img
      src = {filteredRecipeData[recipePosition].image.toString()}>
      </img>}

      </div>
  </div>

);}
}

export {Recipes, savedRecipes};