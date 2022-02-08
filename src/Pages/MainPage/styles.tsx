import styled from 'styled-components/macro';
import TextInput from '../../components/TextInput';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
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