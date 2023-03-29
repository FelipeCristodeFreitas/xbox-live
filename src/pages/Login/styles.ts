import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    height: 90vh;
    
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 1rem;
    box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.75);
    border-radius: 8px;
    border: 1px solid;
   
    
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    input{
        width: 15rem;
        height: 2rem;
    }

   
`

export const ButtonLogin = styled.button`
    width: 100px;
    height: 30px;

    color: #ffff;
    background-color: #228B22;
    border: 0px;
    border-radius: 4px;

    cursor: pointer;
`

export const NoCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    margin-top: 0.8rem;

    font-size: 14px;
`

export const ButtonRegister = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;

   background: transparent;
   border: 0px;

   cursor: pointer;

   font-weight: bold;

`