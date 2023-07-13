import styled from "styled-components";

export const PostCardContainer = styled.article`
    max-width: 26rem;
    height: 16.25rem;
    padding: 2rem;

    background-color: ${props => props.theme.post};
    border-radius: 0.625rem;

`

export const PostCardHeader = styled.header`
    display: flex;
    justify-content: space-between;

    h3{
        max-width: 17.6875rem;
        font-size: 1.25rem;
        font-weight: 700;
        color: ${props => props.theme.title};
    }

    span{
        font-size: 0.875rem;
        color: #7B96B2;
        width: 5.2rem;
        margin-top: 0.2rem;
        text-align: end;
    }
`
export const PostContentContainer = styled.div`
    margin-top: 1.5rem;

    display: block; 
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    width: 100%;
    height: calc(100% - 4rem);
`