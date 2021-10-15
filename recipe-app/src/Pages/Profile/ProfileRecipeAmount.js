import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";

const RECIPE_AMOUNT_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
"13", "14", "15", "16", "17", "18", "19", "20", "21"]

class ProfileRecipeAmount extends Component {
  state = {
    checkboxes: RECIPE_AMOUNT_OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      
      {}
    )
  };

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
        //SAVE AND FILTER API CHARACTERISTICS HERE
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

  createCheckboxes = () => RECIPE_AMOUNT_OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div>
        How many recipes would you like?
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
              <div className="buttons">
                <button type="submit" className="profile-buttons">
                  <Link to="/ProfileDiet"
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

export default ProfileRecipeAmount;