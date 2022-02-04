import styled from 'styled-components/macro';
import { Menu } from '@styled-icons/evaicons-solid/Menu';
import { Close } from '@styled-icons/evaicons-solid/Close';

export const Container = styled.header`
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    padding: 1rem 2rem;
`;

export const Title = styled.h1`
    & span {
        color: #FC8E1B;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & :hover {
        cursor: pointer;
    }
`;

export const MenuIcon = styled(Menu)`
    height: 2.5rem;
`;

export const CloseIcon = styled(Close)`
    height: 2.5rem;
`

