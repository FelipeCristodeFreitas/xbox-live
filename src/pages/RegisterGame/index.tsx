import * as zod from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


import { Header } from '../../components/Header'


import {
    Container,
    Content,
    FormContainer,
    ButtonRegister
} from './styles'

import { api } from '../../lib/axios'

const RegisterValidationSchema = zod.object({
    title: zod.string(),
    categoria: zod.string(),
    description: zod.string(),
    CoverImageUrl: zod.string(),
    year: zod.number(),
    imdbScore: zod.number(),
    trailerYouTubeUrl: zod.string(),
    gameplayYouTubeUrl: zod.string()
})


export type NewRegisterGame = zod.infer<typeof RegisterValidationSchema>



export function RegisterGame (){

    const {
        register,
        handleSubmit,
        reset
      } = useForm<NewRegisterGame>({
        resolver: zodResolver(RegisterValidationSchema),
      });

    async function handleCreateGame(data: NewRegisterGame){
        try {
            const response = await api.post('/games', data)
            alert('Game Criado com Sucesso')
            reset()
            return response
            
        } catch (error) {
            alert('Erro ao cadastrar game')
        }
    }
    

    return (
        <Container>
            <Header />

            <Content>
                <h1>Register game</h1>

                <FormContainer onSubmit={handleSubmit(handleCreateGame)}>
                    <input 
                        placeholder='Nome'
                        {...register('title')}
                        required
                    />
                    
                    <input 
                        placeholder='Categoria'
                        list="task-suggestions"
                        {...register('categoria')}
                        required
                    />

                    <datalist id="task-suggestions">
                        <option value="Aventura" />
                        <option value="RPG" />
                        <option value="MMORPG" />
                        <option value="Guerra" />
                    </datalist>

                   <input 
                        placeholder='descrição'
                        {...register('description')}
                        required
                    />

                    <input 
                        placeholder='imagemUrl'
                        {...register('CoverImageUrl')}
                        required
                    />

                    <input 
                        type='number'
                        {...register('year', {valueAsNumber: true})}
                        required
                    />

                    <input 
                        type='number'
                        {...register('imdbScore', {valueAsNumber: true})}
                        required
                    />

                    <input 
                        placeholder='trailerUrl'
                        {...register('trailerYouTubeUrl')}
                        required
                    />

                    <input 
                        placeholder='GamePlayUrl'
                        {...register('gameplayYouTubeUrl')}
                        required
                    />

                    <ButtonRegister type='submit'>
                        Register
                    </ButtonRegister>
                </FormContainer>
            </Content>
        </Container>
    )
}