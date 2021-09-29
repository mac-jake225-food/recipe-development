import NavBar from './NavBar';
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AccountBox } from './signup';


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
      <Router>
        {/* <NavBar />  */}
        <AppContainer>
          <AccountBox />
        </AppContainer>
        
        
      </Router>
  );
}

export default App;
