import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";
import './Profile.css'

const DIET_OPTIONS = ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan",
"Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"]

var diets = []
var hasBeenSubmitted = false;
var checkboxStates = [];
var a = -1;

class ProfileDiet extends Component {

  state = {
    checkboxes: DIET_OPTIONS.reduce(
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
      console.log(checkboxStates[a-DIET_OPTIONS.length])
      a = a + 1;
      console.log(a)
      return checkboxStates[a-DIET_OPTIONS.length];
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

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    diets = [];
    checkboxStates = [];
    hasBeenSubmitted = true;
    Object.keys(this.state.checkboxes)
      .forEach(checkbox => {
        if (this.state.checkboxes[checkbox]){
          diets.push(checkbox)
        }
        checkboxStates.push(this.state.checkboxes[checkbox])
      });
      console.log(checkboxStates)
      console.log(diets)
      console.log(a)
  };

  createCheckbox = (option) => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => DIET_OPTIONS.map(this.createCheckbox);

  render() {
    a = -1;
    return (
      <div className='selector__items'
      style={{display: 'flex',  
      justifyContent:'center', 
      alignItems:'center',
      height: '60vh'}}>
        <div className='checkbox__items'>
          Diet Options
              <form onSubmit={this.handleFormSubmit}>
                {this.createCheckboxes()}
                <div className="buttons">
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
                  <Link to="/ProfileIntolerances"
                    className="profile-links">
                      Next
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
    );
  }
}
export {ProfileDiet, diets};
 