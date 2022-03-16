import styled from 'styled-components/macro';

export const Button = styled.button`
    background: none;
    border: 1.5px solid #FC8E1B;
    border-radius: 50px;
    padding: 0.25rem 2rem;
    transition: background-color 0.25s linear;
    margin: 1rem;
    text-align: center;
    
    &:hover {
        cursor: pointer;
        background-color: #FC8E1B;;
        transition: background-color 0.25s linear;
    }
`;

export const RegisterButton = styled(Button)`
    border-radius: 5px;
    padding: 0.75rem 1.5rem;
`;