//React
import { useContext, useEffect, useState } from 'react'

//Context
import { UserContext } from '../../context/UserContext'

//Styled
import { PostContent } from './styles'

//Post Header
import { PostHeader } from '../../components/PostHeader'

//React-router-dom
import { useParams } from 'react-router-dom'

interface SelectedPostProps {
    title: string,
    content: string,
    link: string,
    created_at: string,
    username: string,
    comments: number
}


export function Post(){

    const { id } = useParams()
    const { posts } = useContext(UserContext)
    const [ selectedPost, setSelectedPost ] = useState<SelectedPostProps>()

    useEffect(() => {
        function findPost(){
            posts.map((element) => {
                if(element.number === Number(id)){
                    setSelectedPost({
                        title: element.title,
                        content: element.body,
                        link: element.html_url,
                        created_at: element.created_at,
                        username: element.user.login,
                        comments: element.comments
                    })
                }
            })
        }
        findPost()
    }, [id, posts])
    
    

    return(
        <>
            {selectedPost !== undefined ? 
                <>
                    <PostHeader 
                        title={selectedPost.title}
                        link={selectedPost.link}
                        username={selectedPost.username}
                        created_at={selectedPost.created_at}
                        comments={selectedPost.comments}
                    />
                        <PostContent>
                            <p>{selectedPost.content}</p>
                        </PostContent> 
                </>
            : 'Carregando...'
            }
        </>
    )
}