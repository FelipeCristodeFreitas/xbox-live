import { Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { CreateUse } from "../pages/CreateUser";
import { FavoritePage } from "../pages/Favorites";
import { RegisterGame } from "../pages/RegisterGame";
import { UserPage } from "../pages/UserPage";





export function Router (){


    return(

        <Routes>
            <Route path="/" >
                <Route  path="/" element ={<Login/>} />
                <Route  path="/home" element ={<Home/>} />
                <Route  path="/createUser" element ={<CreateUse/>} />
                <Route  path="/favoritePage" element ={<FavoritePage handleDeleteGame={() => {}}/>} />
                <Route  path="/registerGame" element ={<RegisterGame/>} />
                <Route  path="/userPage" element ={<UserPage/>} />
            </Route>

        </Routes>
    )
}