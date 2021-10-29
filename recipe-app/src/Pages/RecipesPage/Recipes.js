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
          this._showMessage.bind(null, true)
        }>
          Generate Recipes
          </button>
        { this.state.showMessage && (filteredRecipeData[Math.floor(Math.random()*(filteredRecipeData.length-1))].title)}
      </div>
  </div>
  
);}
}

export default Recipes;