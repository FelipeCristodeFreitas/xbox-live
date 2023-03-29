import {BrowserRouter} from 'react-router-dom'

import {Router} from './Router/Routes'
import {AuthProvider} from './context/AuthContext'
import {FavoriteProvider} from './context/FavoriteContex'

export function App() {
  

  return (
    <AuthProvider>
      <FavoriteProvider>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </FavoriteProvider>
    </AuthProvider>
  )
}


