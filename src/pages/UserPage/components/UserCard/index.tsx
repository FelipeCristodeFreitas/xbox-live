
interface UserTypes {
    email: string
    name: string
}

interface UserProps {
    user: UserTypes
}


import {
    Container, 
    Content,
} from './styles'

export function UserCar({user}: UserProps){


    return (
        <Container>
            <Content>
                <p> Nome: 
                    <span>
                        {user.name}
                    </span>
                </p>

                <p> Email: 
                    <span>
                        {user.email}
                    </span>
                </p>
            </Content>
        </Container>
    )
}