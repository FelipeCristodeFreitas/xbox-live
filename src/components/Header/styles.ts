import styled from "styled-components";




export const  Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: black;
    color: white;

    padding: 1rem 2rem;

    img{
        width: 40px;
        height: 40px;
    }
`

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

`

export const Button = styled.button`
    padding: 0.5rem;
    cursor: pointer;

    background: transparent;
    border: 1px solid #2bc8c1;
    border-radius: 8px;
    color: white;

    font-size: 14px;
    font-weight: bold;
    
`

