import {
    Container,
} from './styles';
import Page from '../../components/Page';
import heroImageLogin from '../../images/heroImageLogin.jpg';
import TextInput from '../../components/TextInput';
import { Mail } from '@styled-icons/entypo/Mail';
import { LockPassword } from '@styled-icons/remix-fill/LockPassword';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

const Login = () => {

    const { values, handleChange } = useForm();

    console.log(values)

    return(
        <Page heroImage={heroImageLogin}>
            <Container>
                <h2>Log<span>in</span>!</h2>
                <TextInput
                    name="email"
                    type="email"
                    handleChange={handleChange}
                >
                    <Mail />
                </TextInput>
                <TextInput
                    name='password'
                    type="password"
                    handleChange={handleChange}
                >
                    <LockPassword />
                </TextInput>
                <Button type='submit'>Sign in</Button>
            </Container>
            <p>Don't have account? <Link to='/register'><span>Sign up!</span></Link></p>
        </Page>
    )
};

export default Login;