//React
import { useContext } from 'react'

//Context
import { UserContext } from '../../context/UserContext'

//Styled
import { PostCardsSection } from './styles'

//Profile Card
import { ProfileHeader } from '../../components/ProfileHeader'

//Search Bar
import { SearchBar } from '../../components/SearchBar'

//Post Card
import { PostCard } from '../../components/PostCard'

export function Home(){

    const { posts } = useContext(UserContext)

    return(
        <>
            <ProfileHeader />
            <SearchBar />
            <PostCardsSection>
                { posts?.map((element) => {
                    return(
                        <PostCard 
                            key={element.id} 
                            title={element.title}
                            created_at={element.created_at}
                            content={element.body}
                            number={element.number}
                        />
                    )
                }) }
            </PostCardsSection>
        </>
    )
}