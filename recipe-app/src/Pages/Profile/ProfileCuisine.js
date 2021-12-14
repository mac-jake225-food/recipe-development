import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";
import SpoonacularApi from '../../spoonacular';
import {diets, filteredRecipeDataDiet, chooseDietData} from './ProfileDiet';
import {intolerances, filteredRecipeDataIntolerances, chooseIntoleranceData} from './ProfileIntolerances';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {alertSuccess} from './ProfileDiet'

const CUISINE_OPTIONS = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", 
"European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", 
"Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", 
"Vietnamese"];

var cuisines = []
var filteredRecipeDataCuisine=[];
var hasBeenSubmitted = false;
var checkboxStates = [];
var a = -1;
var finishedCuisine = false;
var chooseCuisineData=0;
var noRecipesCuisine = false;

class ProfileCuisine extends Component {
    state = {
      checkboxes: CUISINE_OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: this.setInitialState()
        }),
        {}
      )
    };

    setInitialState () {
      if (!hasBeenSubmitted){
        return false;
      }
      else {
        // console.log(checkboxStates[a-CUISINE_OPTIONS.length])
        a = a + 1;
        // console.log(a)
        return checkboxStates[a-CUISINE_OPTIONS.length];
      }
    }
  
    selectAllCheckboxes = (isSelected) => {
      Object.keys(this.state.checkboxes).forEach(checkbox => {
        this.setState(prevState => ({
          checkboxes: {
            ...prevState.checkboxes,
            [checkbox]: isSelected
          }
        }));
      });
    };
  
    selectAll = () => this.selectAllCheckboxes(true);
  
    deselectAll = () => this.selectAllCheckboxes(false);
  
    handleCheckboxChange = (changeEvent) => {
      const { name } = changeEvent.target;
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [name]: !prevState.checkboxes[name]
        }
      }));
    };
  
    handleFormSubmit = (formSubmitEvent) => {
      formSubmitEvent.preventDefault();
      if (chooseIntoleranceData>chooseCuisineData&&chooseIntoleranceData>chooseDietData){
        chooseCuisineData = chooseIntoleranceData + 1;
      }
      else if (chooseDietData>chooseIntoleranceData&&chooseDietData>chooseCuisineData){
        chooseCuisineData = chooseDietData + 1;
      }
      else {
        chooseCuisineData = chooseCuisineData + 1;
      }
      cuisines = [];
      checkboxStates = [];
      hasBeenSubmitted = true;
      Object.keys(this.state.checkboxes)
        .forEach(checkbox => {
          if (this.state.checkboxes[checkbox]){
            cuisines.push(checkbox)
          }
          checkboxStates.push(this.state.checkboxes[checkbox])
        });
        this.searchRecipes()
    };
  
    createCheckbox = option => (
      <Checkbox
        label={option}
        isSelected={this.state.checkboxes[option]}
        onCheckboxChange={this.handleCheckboxChange}
        key={option}
      />
    );
  
    createCheckboxes = () => CUISINE_OPTIONS.map(this.createCheckbox);

    searchRecipes = () => {
      finishedCuisine=true;
      var api = new SpoonacularApi.RecipesApi()
      var opts = {
      'diet' : diets.toString(),
      'intolerances' : intolerances.toString(),
      'cuisine' : cuisines.toString(),
      '_number' : "100"
      };
      console.log("showing user choices: ",opts)
      var callback = function(error, data, response) {
      if (error) {
        console.error(error);
      } 
      else {
        console.log('API called successfully. Returned data: ', data.results);
        filteredRecipeDataCuisine = data.results;
        if (filteredRecipeDataCuisine.length==0){
          noRecipesCuisine = true;
        }
      }
    };
    api.searchRecipes(opts, callback);
    }

    render() {
      a = -1;
      return (
        <div className='selector__items'
        style={{display: 'flex',  
        justifyContent:'center', 
        alignItems:'center',
        height: '70vh'}}>
          <div className='checkbox__items'>
            Cuisine Options
                <form onSubmit={this.handleFormSubmit}>
                  {this.createCheckboxes()}
                  <div className="buttons">
                  <button type="button" 
                    className="profile-buttons">
                    <Link to="/ProfileIntolerances"
                      className="profile-links">
                        Back
                      </Link>
                    </button>
                    <button
                      type="button"
                      className="profile-buttons"
                      onClick={this.selectAll}>
                      Select All
                    </button>
                    <button
                      type="button"
                      className="profile-buttons"
                      onClick={this.deselectAll}>
                      Deselect All
                    </button>
                    <button type="submit" 
                      className="profile-buttons" onClick={alertSuccess}>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
      );
    }
  }
  
export {ProfileCuisine, cuisines, filteredRecipeDataCuisine, finishedCuisine, chooseCuisineData, noRecipesCuisine};