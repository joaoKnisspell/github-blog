import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${props => props.theme.background};
    }

    span{
        color: ${props => props.theme.text};
    }

    p, h3{
        line-height: 1.6;
        color: ${props => props.theme.text};
    }

    body, textarea, button, input {
        font: 400 1rem Nunito, sans-serif;
    }

    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: currentColor;
    }

    :focus{
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme.blue};
    }
`