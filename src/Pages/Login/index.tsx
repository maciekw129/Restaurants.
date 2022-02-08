import {
    Container,
} from './styles';
import Page from '../../components/Page';
import heroImageLogin from '../../images/heroImageLogin.jpg';
import { useForm } from 'react-hook-form';
import TextInput from '../../components/TextInput';
import { Mail } from '@styled-icons/entypo/Mail';
import { LockPassword } from '@styled-icons/remix-fill/LockPassword';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Login = () => {

    

    return(
        <Page heroImage={heroImageLogin}>
            <Container>
                <h2>Log<span>in</span>!</h2>
                <TextInput
                    placeholder="email"
                    type="email"
                >
                    <Mail />
                </TextInput>
                <TextInput
                    placeholder='password'
                    type="password"
                >
                    <LockPassword />
                </TextInput>
                <Button>Sign in</Button>
            </Container>
            <p>Don't have account? <Link to='/register'><span>Sign up!</span></Link></p>
        </Page>
    )
};

export default Login;