import {
    Container,
} from './styles';
import { useAppSelector } from '../../store/hooks';

const Navbar = () => {

    const { isNavVisible } = useAppSelector(state => state.nav);

    return(
        <Container isNavVisible={isNavVisible}>

        </Container>
    )
};

export default Navbar;