import {
    Container,
    IconContainer,
    MenuIcon,
    CloseIcon,
} from './styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { toggleNav } from '../../store/slices/nav';
import { Link } from 'react-router-dom';

const Header = () => {

    const { isNavVisible } = useAppSelector(state => state.nav);
    const dispatch = useAppDispatch();

    return(
        <Container>
            <Link to='/'><h1><span>R</span>estaurants<span>.</span></h1></Link>
            <IconContainer onClick={() => dispatch(toggleNav())}>
                {isNavVisible ? <CloseIcon /> : <MenuIcon />}
            </IconContainer>
        </Container>
    )
};

export default Header;