
import React, { Component } from "react";
import styled from "styled-components";
import { render } from 'react-dom';
import { filteredRecipeData } from "../Profile/ProfileCuisine";
import { Linking } from 'react';
import { TouchableOpacity } from 'react'
import { Text } from 'react'
import SpoonacularApi from "../../spoonacular";

var savedRecipes = [];
var recipePosition;
var recipeID;
var recipeLink;

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

  getRecipeLink () {
    var api = new SpoonacularApi.RecipesApi()
      var opts = {
        'includeNutrition' : false
      };
      var callback = function(error, data, response) {
      if (error) {
        console.error(error);
      } 
      else {
        recipeLink = data.sourceUrl
        console.log(recipeLink)
      }
    };
    api.getRecipeInformation(recipeID, opts, callback);
  }

render(){  
  if(filteredRecipeData!=undefined){
    recipePosition=Math.floor(Math.random()*(filteredRecipeData.length-1));
    recipeID = filteredRecipeData[recipePosition].id
    this.getRecipeLink()
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
          this.doNothingWTF,
          this.handleClick
          }>
            Get new recipe
          </button>

        <button 
        type="button" className = "recipe-buttons"
        onClick={()=>      
          this.saveRecipe(recipePosition)
        }>
          Save Recipe
          </button>
          </div>
    <div> 
      { typeof filteredRecipeData == 'undefined' && 'Please fill out profile first'}
      </div>
      <div>
      { this.state.buttonClicked &&  typeof filteredRecipeData != 'undefined' && filteredRecipeData[recipePosition].title}
      { this.state.buttonClicked &&  typeof filteredRecipeData != 'undefined' &&
      <img
      onClick = {() => window.open(recipeLink, "_blank")}
      src = {filteredRecipeData[recipePosition].image.toString()}>
      </img>}
      </div>
  </div>

);}
}

export {Recipes, savedRecipes};