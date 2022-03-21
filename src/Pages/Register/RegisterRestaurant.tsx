import TextInput from '../../components/Inputs/TextInput';
import { Mail } from '@styled-icons/entypo/Mail';
import { LockPassword } from '@styled-icons/remix-fill/LockPassword';
import { Signature } from '@styled-icons/fa-solid/Signature';
import { MapFill } from '@styled-icons/bootstrap/MapFill';
import { City } from '@styled-icons/fa-solid/City';
import { Newsletter } from '@styled-icons/entypo/Newsletter';
import { Road } from '@styled-icons/fa-solid/Road';
import { HouseDoorFill } from '@styled-icons/bootstrap/HouseDoorFill';
import { Restaurant } from '@styled-icons/boxicons-regular/Restaurant';
import useForm from '../../hooks/useForm';
import Text from '../../components/Text';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { register } from '../../store/slices/auth';
import { useEffect } from 'react';
import { clearMessage } from '../../store/slices/auth';
import Dropdown from '../../components/Inputs/Dropdown';
import cuisines from '../../data/cuisines';
 
const RegisterRestaurant = () => {
    const { isLoading } = useAppSelector(state => state.auth);
    const { values, handleChange, resetValues } = useForm({
        accountType: 'restaurant',
        email: '',
        password: '',
        passwordConfirm: '',
        restaurantName: '',
        cuisine: '',
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
            <Text bold>About restaurant</Text>
            <TextInput
                name='restaurantName'
                placeholder='Restaurant name *'
                type='text'
                value={values.restaurantName}
                handleChange={handleChange}
            >
                <Signature />
            </TextInput>
            <Dropdown
                data={cuisines}
                handleChange={handleChange}
            >
                <Restaurant />
            </Dropdown>
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
            <Button type='submit'>Sign up</Button>
            <Text margin='0'>Already have an account? <Link to='/login'><span>Sign in!</span></Link></Text>
        </form>
    )
};

export default RegisterRestaurant;