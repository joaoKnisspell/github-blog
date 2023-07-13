//react-router-dom
import { NavLink } from 'react-router-dom'

//date-fns
import { formatDistanceToNowStrict } from 'date-fns' 

//Styled
import { PostCardContainer, PostCardHeader, PostContentContainer } from './styles'

interface PostCardProps {
    title: string,
    created_at: string, 
    content: string,
    number: number
}


export function PostCard({ title, created_at, content, number }: PostCardProps){

    const formattedDate = formatDistanceToNowStrict(new Date(created_at), {
        addSuffix: true,
    }) 

    return(
        <NavLink to={`/post/${number}`}>
            <PostCardContainer>
                <PostCardHeader>
                    <h3>{title}</h3>
                    <span>{formattedDate}</span>
                </PostCardHeader>
                <PostContentContainer>
                    <p>{content}</p>
                </PostContentContainer>
            </PostCardContainer>
        </NavLink>
    )
}