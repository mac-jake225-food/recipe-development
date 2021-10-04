import react from 'react'; 
import styled from 'styled-components'; 
import { LoginForm } from './loginForm';


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10%; 
`;

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 1em;
`;

const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  transform: rotate(78deg);
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(193,225,193,1) 0%, rgba(0,212,255,1) 100%);
  margin-left: -30px; 
  padding-top: ; 
`;
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20%; 
`;

const HeaderText = styled.h2`
  height: 60px; 
  font-size: 30px;
  font-weight: 800;
  line-height: 1px;
  color: #808080;
  z-index: 10;
  margin: 0;
`;
const HeaderSecondaryText = styled.h2`
  text-indent:3em;
  height: 60px; 
  font-size: 30px;
  font-weight: 800;
  line-height: 1px;
  color: #808080;
  z-index: 10;
  margin: 0;
  padding-bottom: .1em;
`

const SmallText = styled.div`
  height: 20px;
  color: #808080; 
  font-weight: 600; 
  font-size: 10px; 
  z-index: 10;
  margin:0; 
  padding-bottom: 2em; 
`
const fillData = styled.div`
  width: 100%; 
  display: flex; 
  flex-direction: column; 
`

    export function AccountBox(props) {
        return (
        <AppContainer>
          <BoxContainer>
                      <TopContainer> 
                      <BackDrop/>
                      <HeaderContainer>
                        <HeaderText>Welcome</HeaderText>
                        <HeaderSecondaryText>Back!</HeaderSecondaryText>
                        <SmallText>Sign in to continue</SmallText>
                      </HeaderContainer>
                      </TopContainer>
                      <fillData>
                        <LoginForm/> 
                      </fillData>
              </BoxContainer>
        </AppContainer>
          
    );
  }