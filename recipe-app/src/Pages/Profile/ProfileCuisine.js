import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";
import SpoonacularApi from '../../spoonacular';
import {diets} from './ProfileDiet';
import {intolerances} from './ProfileIntolerances';

const CUISINE_OPTIONS = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", 
"Ethiopian","European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", 
"Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "North African", "Southern", "Spanish", "Thai", 
"Vietnamese", "West African"];  

var cuisines = []
var filteredRecipeData;

class ProfileCuisine extends Component {
    state = {
      checkboxes: CUISINE_OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        
        {}
      )
    };
  
    selectAllCheckboxes = isSelected => {
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
  
    handleCheckboxChange = changeEvent => {
      const { name } = changeEvent.target;
  
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [name]: !prevState.checkboxes[name]
        }
      }));
    };
  
    handleFormSubmit = formSubmitEvent => {
      formSubmitEvent.preventDefault();
  
      Object.keys(this.state.checkboxes)
        .filter(checkbox => this.state.checkboxes[checkbox])
        .forEach(checkbox => {
          cuisines.push(checkbox)
          console.log(cuisines)
        });
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
      var api = new SpoonacularApi.RecipesApi()
      var opts = {
      'diet' : diets.toString(),
      'intolerances' : intolerances.toString(),
      'cuisine' : cuisines.toString(),
      '_number' : "10000"
      };
      var callback = function(error, data, response) {
      if (error) {
        console.error(error);
      } 
      else {
        console.log('API called successfully. Returned data: ', data.results);
        filteredRecipeData = data.results
      }
    };
    api.searchRecipes(opts, callback);
    }
  
    render() {
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
                    className="profile-buttons">
                    Save
                    </button>
                    <button type="button" 
                    className="profile-buttons"
                    onClick={this.searchRecipes}>
                    Finish Profile
                    </button>
                    {/* <button type="button" 
                    className="profile-buttons">
                    <Link to="/"
                      className="profile-links">
                        Next
                      </Link>
                    </button> */}
                  </div>
                </form>
              </div>
            </div>
      );
    }
  }
  
export {ProfileCuisine, cuisines, filteredRecipeData};