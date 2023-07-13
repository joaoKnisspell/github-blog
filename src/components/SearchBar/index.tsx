//React
import { useContext } from 'react'

//Context
import { UserContext } from '../../context/UserContext'

//Styled
import { SearchBarContainer, SearchBarHeader, SearchBarForm } from './styles'

//Hook Form
import { useForm } from 'react-hook-form'

interface FormProps {
    searchInput: string
}

export function SearchBar(){

    const { posts, getReposData } = useContext(UserContext)
    const { register, reset, handleSubmit } = useForm<FormProps>()

    function handleOnSubmit(data: FormProps){
        getReposData(data.searchInput)
        reset()
    }

    return(
        <SearchBarContainer>
            <SearchBarHeader>
                <h2>Posts</h2>
                <span>{posts.length} {posts.length > 1 ? 'posts' : 'post'}</span>
            </SearchBarHeader>
            <SearchBarForm onSubmit={handleSubmit(handleOnSubmit)}>
                <input 
                    placeholder='Search content...' 
                    {...register('searchInput')}
                />
                <button type="submit">Search</button>
            </SearchBarForm>
        </SearchBarContainer>
    )
}