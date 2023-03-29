import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../lib/axios'

import { UserTypes } from '../../@types/UserTypes'

import { Header } from '../../components/Header'
import { UserCar } from './components/UserCard'

import {
    Container,
    Content,
    CardContainer,
    TittleButton,
    ButtonCreateUser
} from './styles'


export function UserPage (){
    const [user, setUser] = useState<UserTypes[]>([])

    const navigate = useNavigate()

    async function fetchUser(){
        const response = await api.get('/users')
        setUser(response.data)
    }

    const userSize = user.length > 0

    function gotoPageCreateUser(){
        navigate('/createUser')
    }

    useEffect(() => {
        fetchUser()
    }, [])

    
    return (
        <Container>
            <Header />

            <Content>
                <TittleButton> 
                    <h1>Lista de usuários</h1>

                    <ButtonCreateUser onClick={gotoPageCreateUser}>
                        Criar novo usuário
                    </ButtonCreateUser>

                </TittleButton>
                
                <CardContainer>
                    {userSize ? 
                        user.map((user) => {
                            return <UserCar user={user} key={user.id} />
                        })
                            : 
                        <p>Carregando</p>
                    }
                </CardContainer>
            </Content>
        </Container>
    )
}