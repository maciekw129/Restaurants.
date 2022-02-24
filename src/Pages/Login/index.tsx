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
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { login } from '../../store/slices/auth';
import React from 'react';
import Loading from '../../components/Loading';

const Login = () => {

    const { isLoading } = useAppSelector(state => state.auth);
    const { values, handleChange, resetValues } = useForm({
        email: '', 
        password: '',
    });
    const dispatch = useAppDispatch();

    return(
        <Page heroImage={heroImageLogin}>
            <h2>Log<span>in</span>!</h2>
            <Container onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                dispatch(login(values));
                resetValues();
            }}>
                <TextInput
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    value={values.email}
                >
                    <Mail />
                </TextInput>
                <TextInput
                    name='password'
                    type="password"
                    handleChange={handleChange}
                    value={values.password}
                >
                    <LockPassword />
                </TextInput>
                <Button type='submit'>Sign in</Button>
            </Container>
            <p>Don't have account? <Link to='/register'><span>Sign up!</span></Link></p>
            {isLoading && <Loading />}
        </Page>
    )
};

export default Login;