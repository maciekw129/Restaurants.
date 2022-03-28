import TextInput from '../../components/Inputs/TextInput';
import { Mail } from '@styled-icons/entypo/Mail';
import { LockPassword } from '@styled-icons/remix-fill/LockPassword';
import { Signature } from '@styled-icons/fa-solid/Signature';
import { BirthdayCake } from '@styled-icons/fa-solid/BirthdayCake';
import { MapFill } from '@styled-icons/bootstrap/MapFill';
import { City } from '@styled-icons/fa-solid/City';
import { Newsletter } from '@styled-icons/entypo/Newsletter';
import { Road } from '@styled-icons/fa-solid/Road';
import { HouseDoorFill } from '@styled-icons/bootstrap/HouseDoorFill';
import useForm from '../../hooks/useForm';
import Text from '../../components/Text';
import Radio from '../../components/Radio';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { register, clearMessage, stopLoading } from '../../store/slices/auth';
import { useEffect } from 'react';
 
const RegisterGuest = () => {
    const { isLoading } = useAppSelector(state => state.auth);
    const { values, handleChange } = useForm({
        accountType: 'guest', 
        email: '',
        password: '',
        passwordConfirm: '',
        name: '',
        surename: '',
        dateOfBirth: '',
        gender: '',
        city: '',
        postalCode: '',
        streetName: '',
        streetNumber: '',
        state: '',
        apartment: '',
    });
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(clearMessage());
            dispatch(stopLoading());
        }
    }, [])
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(register(values))
    };
    return(
        <form onSubmit={handleSubmit}>
            <TextInput
                name='email'
                placeholder='email *'
                type='email'
                value={values.email}
                handleChange={handleChange}
            >
                <Mail />
            </TextInput>
            <TextInput
                name='password'
                placeholder='password *'
                type='password'
                value={values.password}
                handleChange={handleChange}
            >
                <LockPassword />
            </TextInput>
            <TextInput
                name='passwordConfirm'
                placeholder=" confirm password *"
                type='password'
                value={values.passwordConfirm}
                handleChange={handleChange}
            >
                <LockPassword />
            </TextInput>
            <Text bold>About You</Text>
            <Radio>
                <label><input type='radio' name='gender' value='female' onChange={handleChange} /> female</label><br/>
                <label><input type='radio' name='gender' value='male' onChange={handleChange} /> male</label>
            </Radio>
            <TextInput
                name='name'
                placeholder='name *'
                type='text'
                value={values.name}
                handleChange={handleChange}
            >
                <Signature />
            </TextInput>
            <TextInput
                name='surename'
                placeholder='surname *'
                type='text'
                value={values.surename}
                handleChange={handleChange}
            >
                <Signature />
            </TextInput>
            <TextInput
                name='dateOfBirth'
                placeholder='birthday'
                type='date'
                value={values.dateOfBirth}
                handleChange={handleChange}
            >
                <BirthdayCake />
            </TextInput>
            <Text bold>Your address</Text>
            <TextInput
                name='state'
                placeholder='state'
                type='text'
                value={values.state}
                handleChange={handleChange}
            >
                <MapFill />
            </TextInput>
            <TextInput
                name='city'
                placeholder='city'
                type='text'
                value={values.city}
                handleChange={handleChange}
            >
                <City />
            </TextInput>
            <TextInput
                name='postalCode'
                placeholder='postal code'
                type='text'
                value={values.postalCode}
                handleChange={handleChange}
            >
                <Newsletter />
            </TextInput>
            <TextInput
                name='streetName'
                placeholder='street name'
                type='text'
                value={values.streetName}
                handleChange={handleChange}
            >
                <Road />
            </TextInput>
            <TextInput
                name='streetNumber'
                placeholder='street number'
                type='text'
                value={values.streetNumber}
                handleChange={handleChange}
            >
                <Road />
            </TextInput>
            <TextInput
                name='apartment'
                placeholder='apartment'
                type='text'
                value={values.apartment}
                handleChange={handleChange}
            >
                <HouseDoorFill />
            </TextInput>
            <Button type='submit' disabled={!!isLoading}>Sign up</Button>
            <Text margin='0'>Already have an account? <Link to='/login'><span>Sign in!</span></Link></Text>
        </form>
    )
};

export default RegisterGuest;