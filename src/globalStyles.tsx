import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
        color: black;
    }

    ul, ol {
        list-style-type: none;
    }

    h1, h2, h3, h4, h5, h6, p {
        text-align: center;
        margin: 1rem 0;

        & span {
            color: #FC8E1B;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export default GlobalStyles;