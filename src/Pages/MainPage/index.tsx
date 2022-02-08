import {
    Container,
    SearchBar,
} from './styles';
import Page from '../../components/Page/';
import  heroImageMainPage  from '../../images/heroImageMainPage.jpg';
import { Search } from '@styled-icons/boxicons-regular/Search';
import Button from '../../components/Button';

const MainPage = () => {
    return(
        <Page heroImage={heroImageMainPage}>
            <Container>
                <h2>Search for your <span>favorite</span> restaurant!</h2>
                <SearchBar 
                    placeholder="Enter your address!"
                    textAlign='center'
                    margin='0rem'
                    type="text"
                 >
                    <Search />
                </SearchBar>
                <Button>Search!</Button>
            </Container>
        </Page>
    )
}

export default MainPage;