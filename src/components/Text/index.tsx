import styled from 'styled-components/macro';

const Text = styled.p<{color?: string, fontSize?: string, bold?: boolean, margin?: string}>`
    color: ${({color}) => color};
    font-size: ${({fontSize}) => fontSize};
    font-weight: ${({bold}) => bold ? 'bold' : 'auto'};
    margin: ${({margin}) => margin};
`;

Text.defaultProps = {
    color: 'hsl(0, 0%, 15%)',
    bold: false,
    fontSize: '0.9rem',
    margin: '0rem',
};

export default Text;

