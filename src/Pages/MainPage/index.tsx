import {
    Container,
    SearchSection,
} from './styles';
import Page from '../../components/Page/';
import  heroImageMainPage  from '../../images/heroImageMainPage.jpg';
import TextInput from '../../components/TextInput';
import { Search } from '@styled-icons/boxicons-regular/Search';
import Button from '../../components/Button';

const MainPage = () => {
    return(
        <Page heroImage={heroImageMainPage}>
            <Container>
                <h2>Search for your <span>favorite</span> restaurant!</h2>
                <SearchSection>
                    <TextInput 
                        placeholder="Enter your address!"
                        width="20rem"
                    >
                        <Search />
                    </TextInput>
                    <Button>Search!</Button>
                </SearchSection>
            </Container>
        </Page>
    )
}

export default MainPage;