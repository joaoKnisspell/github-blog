import styled from "styled-components";

export const SearchBarContainer = styled.div`
    margin-top: 4.5rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: .75rem;
`

export const SearchBarHeader = styled.header`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
        font-size: 1.125rem;
        color: ${props => props.theme.title}
    }

    span{
        font-size: 0.875rem;
        color: ${props => props.theme.span};
    }
`

export const SearchBarForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;

    input{
        flex: 1;
        padding: 0.75rem 1rem;

        background-color: ${props => props.theme.input};
        border: 1px solid ${props => props.theme.border};
        border-radius: 0.375rem;

        color: ${props => props.theme.text};

        &::placeholder{
            color: ${props => props.theme.label};
        }
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;

        padding: 0.75rem 1rem;
        border-radius: 0.375rem;

        background-color: ${props => props.theme.green};
        color: ${props => props.theme.button};

        svg{
            color: ${props => props.theme.white}; 
        }
    }

`