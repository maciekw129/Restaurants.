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
`;

export default GlobalStyles;