import NavBar from './NavBar/NavBar';
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AccountBox } from './signup';
import Home from './pages/Home'
import Calendar from './pages/Calendar';
import Recipes from './pages/Recipes';


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10%; 
`;

function App() {
  return (
      <Router>
        <NavBar /> 
        <Switch><Route path='/' exact component={Home}/></Switch> 
        <Switch><Route path='/sign-up' exact component={AccountBox}/></Switch> 
        <Switch><Route path='/Calendar' exact component={Calendar}/></Switch> 
        <Switch><Route path='/Recipes' exact component={Recipes}/></Switch> 

      </Router>
  );
}

export default App; 
