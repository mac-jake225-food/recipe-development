import react from 'react'; 
import styled from 'styled-components'; 


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
  padding-bottom: 5em;
`;

const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  {/* transform shifts our graident container bar 60 degrees*/} 
  transform: rotate(60deg);
  {/* informs where to start the gradient */} 
  top: -270px;
  left: -90px;
  {/* gradient blue color*/} 
  background: rgb(2,0,36);
  background: linear-gradient(58deg, rgba(2,0,36,1) 0%, rgba(193,225,193,1) 35%, rgba(0,212,255,1) 100%);
  );
`;
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 14%; 
`;

const HeaderText = styled.h2`
  height: 60px; 
  font-size: 30px;
  font-weight: 800;
  line-height: 1px;
  color: #fff;
  z-index: 10;
  margin: 0;

`;

const SmallText = styled.div`
  color: #fff; 
  font-weight: 600; 
  font-size: 10px; 
  z-index: 10;
  margin:0; 
`


    export function AccountBox(props) {
        return <BoxContainer>
                    <TopContainer> 
                    <BackDrop/>
                    <HeaderContainer>
                      <HeaderText>Welcome</HeaderText>
                      <HeaderText>Back!</HeaderText>
                      <SmallText>Sign in to continue</SmallText>
                    </HeaderContainer>
                    </TopContainer>
            </BoxContainer>
    }