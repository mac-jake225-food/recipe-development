import NavBar from './NavBar/NavBar';
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AccountBox } from './Signup-Form';
import Home from './Pages/Home'
import Calendar from './Pages/Calendar';
import Recipes from './Pages/Recipes';
import Profile from './Pages/Profile';

import SpoonacularApi from './spoonacular';




function App() {
  return (
      <Router>
        <NavBar /> 
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/sign-up' exact component= {AccountBox}/>
          <Route path='/Calendar' exact component={Calendar}/>
          <Route path='/Recipes' exact component={Recipes}/>
          <Route path='/Profile' exact component={Profile}/>
        </Switch> 
      </Router>
  );
}

export default App; 


// move this code where it belongs
// testing spoonacular works
console.log("-----------------------> running API query");
var api = new SpoonacularApi.IngredientsApi()
var opts = {
  'query': "burger", // {String} The (natural language) search query.
  '_number': 10, // {Number} The maximum number of items to return (between 1 and 100). Defaults to 10.
  'metaInformation': false, // {Boolean} Whether to return more meta information about the ingredients.
  'intolerances': "egg" // {String} A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ', data);
  }
};
api.autocompleteIngredientSearch(opts, callback);