import styled from 'styled-components/macro';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const Container = styled.div<{margin?: string}>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${({margin}) => margin};
    width: 250px;
`;

Container.defaultProps = {
    margin: '1rem',
}

export const StyledInput = styled.input<{textAlign?: string}>`
    border: 0.5px solid hsl(0, 0%, 50%);
    border-radius: 0 50px 50px 0;
    border-left: none;
    height: 2rem;
    width: 100%;
    text-align: ${({textAlign}) => textAlign};
    padding: 0 1rem;
`;

StyledInput.defaultProps = {
    textAlign: 'left',
}

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 3rem;
    border-right: none;
    border-radius: 50px 0 0 50px;
    background-color: #FDB568;

    ${StyledIconBase} {
        width: 1rem;
        height: 1rem;
    }
`