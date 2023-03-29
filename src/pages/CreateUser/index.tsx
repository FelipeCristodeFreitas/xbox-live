import * as zod from 'zod'

import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


import {
    Container,
    FormContainer,
    ButtonLogin,
    NoCount,
    ButtonCreate,
    InputCheck

} from './styles'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Hooks/UseAuth/useAuth'

const createUserValidationSchema = zod.object({
    email: zod.string(), 
    password: zod.string(), 
    cpf: zod.string(), 
    name: zod.string(), 
    isAdmin: zod.boolean()
})


export type RegisterData = zod.infer<typeof createUserValidationSchema>



export function CreateUse(){
    const {registerUser} = useAuth()

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset
      } = useForm<RegisterData>({
        resolver: zodResolver(createUserValidationSchema),
      });


      async function handleCreateUser(data: RegisterData) {
        const {email, cpf, isAdmin, name, password} = data

        try {

            const response = await registerUser({email, cpf, isAdmin, name, password})
            
            alert('usuario criado com sucesso')
            reset()
            navigate('/')
            return response
            
        } catch (error) {
            alert("Erro ao cadastrar usuario")
        }
        

    }

    function gotoPageLogin(){
        navigate('/')
    }


    return(
        <Container>
            <FormContainer onSubmit={handleSubmit(handleCreateUser)}>
                <input
                    placeholder='Digite seu nome'
                    required
                    {...register('name')}
                />

                <input
                    placeholder='Digite um email'
                    required
                    {...register('email')}
                />

                <input
                    placeholder='Digite uma senha'
                    required
                    {...register('password')}
                />

                <input
                    placeholder='Digite seu CPF'
                    required
                    {...register('cpf')}
                      
                />

                <InputCheck>
                    <input 
                        {...register('isAdmin')}
                        type='checkbox'
                    />
                    <label>Cadastrar como admin?</label>
                </InputCheck>
                

                <ButtonCreate type='submit' >
                    inscreva-se
                </ButtonCreate>
            </FormContainer>

            <NoCount>
                já tem uma conta?
                    
                <ButtonLogin onClick={gotoPageLogin}>
                    entre
                </ButtonLogin>
            </NoCount>
        </Container>

    )
}