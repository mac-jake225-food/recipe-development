import NavBar from './NavBar/NavBar';
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AccountBox } from './Pages/Signup-Form';
import Home from './Pages/Home'
import Calendar from './Pages/Calendar';
import Recipes from './Pages/Recipes';




function App() {
  return (
      <Router>
        <NavBar /> 
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/sign-up' exact component= {AccountBox}/>
          <Route path='/Calendar' exact component={Calendar}/>
          <Route path='/Recipes' exact component={Recipes}/>
        </Switch> 
      </Router>
  );
}

export default App; 
