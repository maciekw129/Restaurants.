import styled from 'styled-components/macro';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledInput = styled.input<{width : string}>`
    border: 0.5px solid black;
    border-radius: 0 50px 50px 0;
    border-left: none;
    height: 2.5rem;
    width: ${({width}) => width};
    text-align: center;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 3rem;
    border-right: none;
    border-radius: 50px 0 0 50px;
    background-color: #FC8E1B;

    ${StyledIconBase} {
        width: 1.5rem;
        height: 1.5rem;
    }
`