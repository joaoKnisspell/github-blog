import styled from "styled-components";

export const PostHeaderContainer = styled.header`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    a{
        display: flex;
        align-items: center;
        gap: 0.5rem;

        color: ${props => props.theme.green};

        font-size: .75rem;
        font-weight: 700;
        
        text-transform: uppercase;

        line-height: 0;
    }

    svg{
        color: ${props => props.theme.green};
    }
`

export const PostDetail = styled.div`
    margin-top: -.5rem;

    display: flex;
    flex-direction: column;
    gap: .8rem;

    h3{
        font-size: 1.5rem;
        color: ${props => props.theme.title};
        line-height: 1.3;
    }

    .icons-section{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        gap: .5rem 1.5rem;
    }
`