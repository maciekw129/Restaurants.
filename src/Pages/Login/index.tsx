import { useEffect } from 'react';
import Page from '../../components/Page';
import heroImageLogin from '../../images/heroImageLogin.jpg';
import TextInput from '../../components/Inputs/TextInput';
import { Mail } from '@styled-icons/entypo/Mail';
import { LockPassword } from '@styled-icons/remix-fill/LockPassword';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { login } from '../../store/slices/auth';
import React from 'react';
import Loading from '../../components/Loading';
import { clearMessage, stopLoading } from '../../store/slices/auth';
import { useNavigate } from 'react-router-dom';
import Text from '../../components/Text';

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
        }
        return () => {
            dispatch(clearMessage());
            dispatch(stopLoading());
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
            <form onSubmit={handleSubmit} >
                <TextInput
                    name="email"
                    placeholder='email'
                    type="email"
                    handleChange={handleChange}
                    value={values.email}
                >
                    <Mail />
                </TextInput>
                <TextInput
                    name='password'
                    placeholder='password'
                    type="password"
                    handleChange={handleChange}
                    value={values.password}
                >
                    <LockPassword />
                </TextInput>
                <Button type='submit' disabled={!!isLoading}>Sign in</Button>
                <Text margin="0">You don't have account? <Link to='/register'><span>Sign up!</span></Link></Text>
            </form>
            {isLoading && <Loading />}
            {message && <Text color="red" bold>{message}</Text>}
        </Page>
    )
};

export default Login;