import Page from '../../components/Page';
import heroImageRegister from '../../images/heroImageRegister.jpg';
import { Outlet } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import Text from '../../components/Text';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useEffect } from 'react';
import { clearRegister } from '../../store/slices/auth';

const Register = () => {
    const dispatch = useAppDispatch();
    const { isRegisterSuccessfull, message } = useAppSelector(state => state.auth);

    useEffect(() => {
        return () => {
            dispatch(clearRegister());
        }
    }, []);

    return(
        <Page heroImage={heroImageRegister}>
            <h2><span>Regi</span>ster!</h2>
            {isRegisterSuccessfull ?
            <>
                <Text color='green' bold>Register success! You can now sign in.</Text>
                <Link to='/login'><Button>Sign in</Button></Link>
            </>
            : <Outlet />
            }
            <Text color="red" bold>{message}</Text>
        </Page>
    )
};

export default Register;