import {
    Container,
} from './styles';
import { useEffect } from 'react';
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
import ErrorText from '../../components/ErrorText';
import { clearMessage } from '../../store/slices/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { isLoading, message, isLogged } = useAppSelector(state => state.auth);
    const { values, handleChange, resetValues } = useForm({
        email: '', 
        password: '',
    });
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(isLogged) {
            navigate('/');
            console.log('gejj');
        }

        return () => {
            dispatch(clearMessage());
        }
    }, [isLogged]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login(values))
            .then(() => {
                resetValues();
            })
    };

    return(
        <Page heroImage={heroImageLogin}>
            <h2>Log<span>in</span>!</h2>
            <Container onSubmit={handleSubmit} >
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
            <p>You don't have account? <Link to='/register'><span>Sign up!</span></Link></p>
            {isLoading && <Loading />}
            {message && <ErrorText>{message}</ErrorText>}
        </Page>
    )
};

export default Login;