import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;
    padding: 1rem;

    width: 70%;
    height: auto;

    box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.75);
    border-radius: 8px;
    border: 1px solid;
  

`

export const ImageGame = styled.img`
    width: 180px;
    height: 180px;

    border-radius: 8px;
`

export const Title = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: bold;

    color: green;
`

export const Description = styled.section`
    
    p{
        text-align: center;
        font-size: 14px;
        font-weight: bold;
    }

`

export const ImgBannerTrailer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;

   button{
        display: flex;
        align-items: center;
        cursor: pointer;

        width: 100px;
        height: 30px;
        padding: 5px;

        color: #ffff;
        background-color: #228B22;
        border: 0px;
        border-radius: 4px;

        a{
            text-decoration: none;
            color: black;
            font-weight: bold;
            white-space: nowrap;
        }
   }

`



export const ButtonAddFavorite = styled.button`
  margin-top: 10px;

  min-height: 30px;
  max-height: 30px;

  cursor: pointer;
  background-color: green;

  font-weight: bold;
  font-size: 14px;
  color: white;

  border: 1px solid black;
  border-radius: 8px;

  
`

export const ButtonRemove = styled.button`
  margin-top: 10px;
  
  min-height: 30px;
  max-height: 30px;

  cursor: pointer;
  background-color: red;

  font-weight: bold;
  font-size: 14px;
  color: white;

  border: 1px solid black;
  border-radius: 8px;

`