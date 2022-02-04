import {
    Container,
    Title,
    IconContainer,
    Icon,
} from './styles';

const Header = () => {
    return(
        <Container>
            <Title>Restaurants<span>.</span></Title>
            <IconContainer>
                <Icon />
            </IconContainer>
        </Container>
    )
};

export default Header;