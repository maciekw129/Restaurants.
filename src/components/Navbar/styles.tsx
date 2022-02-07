import styled from 'styled-components/macro';

export const Container = styled.ul<{isNavVisible: boolean}>`
    position: absolute;
    top: -8.5rem;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 13rem;
    background-color: #FDB568;
    display: flex;
    transform: ${({isNavVisible}) => isNavVisible ? 'translateY(13rem)' : null};
    transition: transform 0.5s ease-in-out;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const NavOption = styled.li`
    width: 100%;
    padding: 1.5rem;

    &:hover {
        cursor: pointer;
    }
`;