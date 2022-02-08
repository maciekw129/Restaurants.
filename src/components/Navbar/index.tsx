import {
    Container,
    NavOption,
} from './styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { toggleNav } from '../../store/slices/nav';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const { isNavVisible } = useAppSelector(state => state.nav);
    const dispatch = useAppDispatch();

    return(
        <Container isNavVisible={isNavVisible}>
            <Link to='/'><NavOption onClick={() => dispatch(toggleNav())}>Main page</NavOption></Link>
            <Link to='/login'><NavOption onClick={() => dispatch(toggleNav())}>Login</NavOption></Link>
            <Link to='/'><NavOption onClick={() => dispatch(toggleNav())}>Register</NavOption></Link>
        </Container>
    )
};

export default Navbar;