import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";

const DIET_OPTIONS = ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan",
"Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"]

var diets = []

class ProfileDiet extends Component {
  state = {
    checkboxes: DIET_OPTIONS.reduce(
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
        diets.push(checkbox)
        console.log(diets)
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

  createCheckboxes = () => DIET_OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div>
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
    );
  }
}

export default {ProfileDiet, diets};
 