import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const CardContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;

`
export const TittleButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;
`

export const ButtonCreateUser = styled.button`
    width: 150px;
    height: 30px;

    color: black;
    background-color: #228B22;
    border: 0px;
    border-radius: 4px;

    font-weight: bold;
    font-size: 14px;

    cursor: pointer;
`

