
import { useContext} from 'react'
import { favoriteContext } from '../../../../context/FavoriteContex'


import {
    Container, 
    ImageGame, 
    Title,
    Description, 
    ImgBannerTrailer,
    ButtonAddFavorite,
    ButtonRemove,
} from './styles'



interface GamesTypes {
    id: number
    title: string
    CoverImageUrl: string
    description: string
    year: number
    imdbScore: number
    trailerYouTubeUrl: string
    gameplayYouTubeUrl: string 
}

interface GamesProps {
    games: GamesTypes
    handleDeleteGame: (id: number) => void
}


export function CardGames ({games, handleDeleteGame}:GamesProps){
    const {favorites, handleAddToFavorites, handleRemoveFavorites} = useContext(favoriteContext)


    const isFavorite = favorites.some((prod) => prod.id === games.id);

    return(
        <Container>
            <ImageGame 
                src={games.CoverImageUrl} 
                alt={games.title}
            />

            {!isFavorite? 
                <ButtonAddFavorite 
                    onClick={()=>handleAddToFavorites(games)}
                >
                    Adionar ao favoritos
                </ButtonAddFavorite>
                :
                <ButtonRemove
                    onClick={()=>handleRemoveFavorites(games)}
                >
                    Remover dos favoritos
                </ButtonRemove>
            }

            <Description>
                <Title>{games.title}</Title>
                <p>Descrição: {games.description}</p>
                <p>Ano: {games.year}</p>
            </Description>
            

            <ImgBannerTrailer>
                <p>Game Play</p>

                <button>
                    <a href={games.gameplayYouTubeUrl}>
                        Assistir Agora
                    </a>
                </button>
            </ImgBannerTrailer>

            <ImgBannerTrailer>
                <p>Trailer</p>
                
                <button>
                    <a href={games.trailerYouTubeUrl}>
                        Assistir Agora
                    </a>
                </button>
                
            </ImgBannerTrailer>

            <p>Score: {games.imdbScore}</p>

            <ButtonRemove onClick={()=>handleDeleteGame(games.id)}> 
                Excluir game
            </ButtonRemove>
            
        </Container>
    )
}