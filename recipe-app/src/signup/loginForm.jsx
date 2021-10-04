import react from 'react'
import { BoxContainer, FormContainer, Input, SubmitButton } from './userInput'

export function LoginForm(props) {
    return (
    <BoxContainer>
        <FormContainer>
            <Input type= "email" placeholder="Email" /> 
            <Input type= "password" placeholder="Password" /> 
            <SubmitButton type="submit"> Sign In </SubmitButton> 
        </FormContainer>
    </BoxContainer>
    );
}