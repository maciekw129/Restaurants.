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
        margin: 1rem;

        & span {
            color: #FC8E1B;
        }
    }

    p {
        font-size: 0.9rem;
    }
`;

export default GlobalStyles;