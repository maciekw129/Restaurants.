import {
    Container,
    NavOption,
} from './styles';
import { useAppSelector } from '../../store/hooks';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const { isNavVisible } = useAppSelector(state => state.nav);

    return(
        <Container isNavVisible={isNavVisible}>
            <Link to='/'><NavOption>Main page</NavOption></Link>
            <Link to='/'><NavOption>Login</NavOption></Link>
            <Link to='/'><NavOption>Register</NavOption></Link>
        </Container>
    )
};

export default Navbar;