//Styled
import styled from "styled-components";

export const ProfileHeaderContainer = styled.section`
    position: relative;

    width: 100%;
    margin-top: -5.5rem;
    padding: 2rem 2.5rem;
    border-radius: 0.625rem;

    background-color: ${props => props.theme.profile};

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;


    @media screen and (max-width: 600px){
        flex-direction: column;
        padding: 1rem;
    }
`

export const ProfileAvatar = styled.img`
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 0.5rem;
`

export const ProfileDetail = styled.div`
    min-width: 15rem;

    display: flex;
    flex-direction: column;
    flex: 1;

    .text{
        h1{
            font: 700 1.5rem 'Nunito', sans-serif;
            line-height: 1.3;
            color: ${props => props.theme.title};
        }
        p{
            margin-top: .5rem;
        }
    }

    .icons-section{
        margin-top: 1.75rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        gap: .5rem 1.5rem;
    }
`

export const ProfileIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg{
        color: ${props => props.theme.text};
        &:hover{
            transition: .2s;
            color: ${props => props.theme.green};
            cursor: pointer;
        }
    }

    span{
        color: ${props => props.theme.subtitle};
    }

`

export const GithubLink = styled.div`

    position: absolute;
    top: 2.5rem;
    right: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    cursor: pointer;

    a{
        color: ${props => props.theme.green};
        font: 700 .75rem Nunito, sans-serif;
        text-decoration: none;
    }

    svg{
        color: ${props => props.theme.green};
    }

    @media screen and (max-width: 600px){
        top: 1.5rem;
        right: 1rem;
    }
`