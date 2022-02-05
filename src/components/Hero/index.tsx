import styled from 'styled-components/macro';

const Hero = styled.div<{ heroImage: String }>`
    position: absolute;
    z-index: -2;
    top: 4.5rem;
    width: 100%;
    height: 13rem;
    background-image: ${({ heroImage }) => `url(${heroImage})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export default Hero;