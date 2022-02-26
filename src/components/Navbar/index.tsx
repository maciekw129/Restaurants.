import {
    Container,
    NavOption,
} from './styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { toggleNav } from '../../store/slices/nav';
import { Link } from 'react-router-dom';
import { logout } from '../../store/slices/auth';

const Navbar = () => {

    const { isNavVisible } = useAppSelector(state => state.nav);
    const { isLogged } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(toggleNav());
    }

    if(isLogged) {
        return(
            <Container isNavVisible={isNavVisible}>
                <Link to='/'><NavOption onClick={() => dispatch(toggleNav())}>Main page</NavOption></Link>
                <Link to='/login'><NavOption onClick={() => dispatch(toggleNav())}>Your profile</NavOption></Link>
                <Link to='/'><NavOption onClick={handleLogout}>Logout</NavOption></Link>
            </Container>
        )
    } else {
        return(
            <Container isNavVisible={isNavVisible}>
                <Link to='/'><NavOption onClick={() => dispatch(toggleNav())}>Main page</NavOption></Link>
                <Link to='/login'><NavOption onClick={() => dispatch(toggleNav())}>Login</NavOption></Link>
                <Link to='/register'><NavOption onClick={() => dispatch(toggleNav())}>Register</NavOption></Link>
            </Container>
        )
    }
};

export default Navbar;