import {
    Container,
    Title,
    IconContainer,
    MenuIcon,
    CloseIcon,
} from './styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { toggleNav } from '../../store/slices/nav';

const Header = () => {

    const { isNavVisible } = useAppSelector(state => state.nav);
    const dispatch = useAppDispatch();

    return(
        <Container>
            <Title>Restaurants<span>.</span></Title>
            <IconContainer onClick={() => dispatch(toggleNav())}>
                {isNavVisible ? <CloseIcon /> : <MenuIcon />}
            </IconContainer>
        </Container>
    )
};

export default Header;