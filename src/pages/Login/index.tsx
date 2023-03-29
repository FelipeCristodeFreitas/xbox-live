import * as zod from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'



import {
    Container,
    FormContainer,
    InputContainer, 
    NoCount, 
    ButtonLogin,
    ButtonRegister
} from './styles'

import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import { ReactNode } from 'react'

const loginValidationSchema = zod.object({
    email: zod.string(),
    password: zod.string()
})


export type NewLoginData = zod.infer<typeof loginValidationSchema>

interface LoginProps {
    children?: ReactNode;
}

export function Login({children}:LoginProps){
    const {authenticated, login} = useAuthContext()

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
      } = useForm<NewLoginData>({
        resolver: zodResolver(loginValidationSchema),
    });

    async function handleLogin(data: NewLoginData) {
        console.log('login')
        
        try {
            alert('login realizado com sucesso')
            login(data)
           
            navigate('home')
        } catch (error) {
            alert('Email ou senha incorretos')
        }
    }

    function gotoPageCreateUser(){
        navigate('createUser')
    }


    if (authenticated) {
        return <>{children}</>;
      }

    return (
        <Container>
             <FormContainer onSubmit={handleSubmit(handleLogin)}>
                <span>Faça login</span>

                <InputContainer>
                    <input
                        placeholder='E-mail'
                        {...register('email')}
                        required
                    />

                    <input
                        placeholder='senha'
                        {...register('password')}
                        type='password'
                        required
                    />
                </InputContainer>
               

                <ButtonLogin type='submit'>
                    Entrar
                </ButtonLogin>
             </FormContainer>
             
             <NoCount>
                <span>Não tenha conta?</span>

                <ButtonRegister onClick={gotoPageCreateUser}>
                    Registre-se
                </ButtonRegister>
             </NoCount>
        </Container>
    )
}