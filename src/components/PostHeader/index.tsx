//React-router-dom
import { NavLink } from "react-router-dom";

//date-fns
import { formatDistanceToNowStrict } from "date-fns";

//Default Header Style
import { ProfileHeaderContainer, ProfileIcons } from "../ProfileHeader/styles";

//Styled
import { PostHeaderContainer, PostDetail} from './styles'

//Icons
import { CaretLeft, Link, GithubLogo, Calendar, Chat } from "@phosphor-icons/react";

interface PostHeaderProps {
    title: string,
    created_at: string,
    link: string,
    comments: number,
    username: string
}

export function PostHeader({ title, created_at, link, comments, username }: PostHeaderProps){

    const formattedDate = formatDistanceToNowStrict(new Date(created_at), {
        addSuffix: true,
    })

    return(
        <ProfileHeaderContainer>
            <PostHeaderContainer>
                <NavLink to='/'><CaretLeft size={15} />Voltar</NavLink>
                <a target="_blank" href={link}>VIEW ON GITHUB<Link size={15} /></a>
            </PostHeaderContainer>
            <PostDetail>
                <h3>{title}</h3>
                <div className="icons-section">
                    <ProfileIcons>
                        <GithubLogo size={20} weight='fill'/><span>{username}</span>
                    </ProfileIcons>
                    <ProfileIcons>
                        <Calendar size={20} weight='fill'/><span>{formattedDate}</span>
                    </ProfileIcons>
                    <ProfileIcons>
                        <Chat size={20} weight='fill'/><span>{comments} {comments > 1 ? 'comments' : 'comment'}</span>
                    </ProfileIcons>
                </div>
            </PostDetail>
        </ProfileHeaderContainer>
    )
}