import Sidebar from "./SideBar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home'
import Calendar from './Pages/CalendarPage/Calendar';
import Recipes from './Pages/RecipesPage/Recipes';
import ProfileDiet from './Pages/Profile/ProfileDiet';
import ProfileIntolerances from './Pages/Profile/ProfileIntolerances';

import SpoonacularApi from './spoonacular';
import Checkbox from './Pages/Profile/Checkbox';




function App() {
  return (
    <>
      <Router>
        <Sidebar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Calendar' exact component={Calendar}/>
          <Route path='/Recipes' exact component={Recipes}/>
          <Route path='/ProfileDiet' exact component={ProfileDiet}/> 
          <Route path='/ProfileIntolerances' exact component={ProfileIntolerances}/>
        </Switch>
      </Router>
    </>
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