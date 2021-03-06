import styled from 'styled-components/macro';
import TextInput from '../../components/Inputs/TextInput';

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid hsl(0, 0%, 50%);
`;

export const SearchBar = styled(TextInput)`
    width: 500px;

    @media only screen and (max-width: 540px) {
        width: 250px;
    }
`;

export const RestaurantsContainer = styled.div`
    margin: 4rem 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    row-gap: 4rem;
    place-items: center;

    @media only screen and (max-width: 880px) {
        grid-template-columns: 1fr;
    }
`;