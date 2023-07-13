//React
import { useContext } from 'react'

//Context
import { UserContext } from '../../context/UserContext'

//Styled
import { ProfileHeaderContainer, ProfileAvatar, ProfileDetail, ProfileIcons, GithubLink } from './styles'

//Icons
import { GithubLogo, Buildings, GlobeHemisphereWest, Link } from '@phosphor-icons/react'

export function ProfileHeader(){

    const { userData } = useContext(UserContext) 

    return(
        <ProfileHeaderContainer>
            <ProfileAvatar src={userData?.avatar_url}/>
            <ProfileDetail>
                <div className="text">
                    <h1>{userData?.name}</h1>
                    <p>{userData?.bio}</p>
                </div>
                <div className="icons-section">
                    <ProfileIcons><GithubLogo size={20} weight='fill'/><span>{userData?.login}</span></ProfileIcons>
                    <ProfileIcons><Buildings size={20} weight='fill'/><span>{userData?.company}</span></ProfileIcons>
                    <ProfileIcons><GlobeHemisphereWest size={20} weight='fill'/><span>{userData?.location}</span></ProfileIcons>
                </div>
            </ProfileDetail>    
            <GithubLink>
                <a target='_blank' href={userData?.html_url}>GITHUB</a>
                <Link size={15} />
            </GithubLink>
        </ProfileHeaderContainer>
    )
}