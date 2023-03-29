import { createContext, useState, ReactNode} from 'react';

import { GamesDataTypes } from '../@types/GamesTypes';

interface favoriteContextProps {
  favorites: GamesDataTypes[];
  handleAddToFavorites: (data: GamesDataTypes) => void;
  handleRemoveFavorites: (data:GamesDataTypes) => void;
}

export const favoriteContext = createContext({} as favoriteContextProps);

interface Props {
  children?: ReactNode
}

export const FavoriteProvider = ({children}: Props) => {
   const [favorites, setFavorites] = useState<GamesDataTypes[]>([]);

    function handleAddToFavorites(data:GamesDataTypes){
        setFavorites((state) => [...state, data])
    }

    const handleRemoveFavorites = ({id}: GamesDataTypes) => {
        setFavorites((state) => state.filter((item)=> item.id !== id))
    };

  
  return (
    <favoriteContext.Provider
      value={{
        favorites,
        handleAddToFavorites,
        handleRemoveFavorites
        
      }}

      >
        {children}
      
    </favoriteContext.Provider>
  );
};