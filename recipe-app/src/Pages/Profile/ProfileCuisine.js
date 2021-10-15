import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";

const CUISINE_OPTIONS = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", 
"European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", 
"Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", 
"Vietnamese"];  

var cuisines = []

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
  
    render() {
      return (
        <div>
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
                  className="profile-buttons">
                    <Link to="/ProfileCookTime"
                    className="profile-links">
                    Next
                    </Link>
                  </button>
                </div>
              </form>
            </div>
      );
    }
  }
  
  export {ProfileCuisine, cuisines};