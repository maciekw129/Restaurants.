import styled from 'styled-components/macro';

const Hero = styled.div<{ heroImage: String }>`
    z-index: -99;
    width: 100%;
    height: 13rem;
    background-image: ${({ heroImage }) => `url(${heroImage})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export default Hero;