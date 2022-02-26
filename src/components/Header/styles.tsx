import styled from 'styled-components/macro';
import { Menu } from '@styled-icons/evaicons-solid/Menu';
import { Close } from '@styled-icons/evaicons-solid/Close';

export const Container = styled.header`
    position: relative;
    width: 100%;
    height: 4.5rem;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    padding: 1rem 2rem;
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
    height: 2rem;
`;

export const CloseIcon = styled(Close)`
    height: 2rem;
`

