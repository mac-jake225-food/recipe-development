import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";

const INTOLERANCE_OPTIONS = ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", 
"Soy", "Sulfite", "Tree Nut", "Wheat"]

var intolerances = []

class ProfileIntolerances extends Component {
  state = {
    checkboxes: INTOLERANCE_OPTIONS.reduce(
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
        console.log(checkbox, "is selected.");
        intolerances.push(checkbox)
        console.log(intolerances)
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

  createCheckboxes = () => INTOLERANCE_OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div>
        Intolerance Options
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
              <div className="buttons">
              <button type="button" 
                className="profile-buttons">
                  <Link to="/ProfileDiet"
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
                <Link to="/ProfileCuisine"
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

export default ProfileIntolerances;