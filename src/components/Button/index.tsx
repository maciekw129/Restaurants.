import styled from 'styled-components/macro';

const Button = styled.button`
    background: none;
    border: 1.5px solid #FC8E1B;
    border-radius: 50px;
    padding: 0 3rem;
    transition: background-color 0.25s linear;
    
    &:hover {
        cursor: pointer;
        background-color: #FC8E1B;;
        transition: background-color 0.25s linear;
    }
`;

export default Button;