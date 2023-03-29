import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    

`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    padding: 1rem;
    box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.75);
    border-radius: 8px;
    border: 1px solid;

    input{
        width: 300px;
        height: 20px;
    }

`

export const ButtonRegister = styled.button`
    width: 100px;
    height: 30px;

    color: #ffff;
    background-color: #228B22;
    border: 0px;
    border-radius: 4px;

    cursor: pointer;
`




