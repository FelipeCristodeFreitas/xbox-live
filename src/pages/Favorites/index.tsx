import { useContext, useEffect } from "react"
import { Header } from "../../components/Header"
import { favoriteContext } from "../../context/FavoriteContex"


import { CardGames } from "../Home/components/CardGames"


import {
    Container,
    Content,
    Title,
    CardContainer,
    NoItems
} from './styles'

interface GamesProps {
    handleDeleteGame: (id: number) => void 
}


export function FavoritePage({handleDeleteGame}:GamesProps){
    const {favorites} = useContext(favoriteContext)
    
    const favoritesSize = favorites.length > 0

   
    return(
        <Container>
            <Header/>
            <Content>
                <Title>Sua lista de jogos</Title>
                
                <CardContainer>

                {favoritesSize? 
                    favorites.map((item) => 
                        <CardGames 
                            key={item.id} 
                            games={item}
                            handleDeleteGame={handleDeleteGame}
                        />) 
                        : 
                    <NoItems>
                        <h1>
                            Sua lista de favoritos está vazia, adicione seus jogos!
                        </h1>
                    </NoItems>
                }
                </CardContainer>
            </Content>
        </Container>
    )
}