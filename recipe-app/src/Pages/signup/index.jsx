import react from 'react'; 
import styled from 'styled-components'; 

const BoxContainer = styled.div`
  width: 21%;
  min-height: 75%;
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
  transform: rotate(60deg);
  {/* this top and left is for the gradient color, shapes it  */} 
  top: -330px;
  left: -130px;
  background: rgb(2,0,36);
  background: linear-gradient(58deg, rgba(2,0,36,1) 0%, rgba(193,225,193,1) 35%, rgba(0,212,255,1) 100%);
  );
`;

const HeaderContainer = styled.div`
  width: 100%; 
  display: flex; 
  flex-direction: column; 
`
const HeaderText = styled.h2`
  font-size: 25px; 
  line-weight: 500; 
  line-height: 1.3; 
  color: #fff; 


`

    export function AccountBox(props) {
        return <BoxContainer>
                    <TopContainer> 
                    <BackDrop/>
                    <HeaderContainer>
                      <HeaderText></HeaderText>
                    </HeaderContainer>
                    </TopContainer>
            </BoxContainer>
    }