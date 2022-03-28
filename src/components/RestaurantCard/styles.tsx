import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;

    &:hover {
        cursor: pointer;
    }
`;

export const Image = styled.div<{image: string}>`
    height: 60%;
    width: 100%;
    background-image: url(${({image}) => image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px 5px 0 0;
`;

export const Content = styled.div`
    width: 100%;
    height: 40%;
    border: 1px solid hsl(0, 0%, 75%);
    border-top: none;
    border-radius: 0 0 5px 5px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`; 