import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0.5rem;
    box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.75);
    border-radius: 8px;
    border: 1px solid;

    width: 220px;
    height: auto;

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

   
   p{
        font-size: 18px;
        font-weight: bold;
   }

   span{
        font-size: 16px;
        font-weight: bold;
        color: green;
        margin-left: 5px;
   }

`