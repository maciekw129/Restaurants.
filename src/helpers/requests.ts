import axios from 'axios';

const API = 'https://desolate-journey-33475.herokuapp.com/';

interface valuesTypes {
    [key: string]: string;
}

const requests = {
    login(email: string, password: string) {
       return axios.post(API + 'login', {
            email: email,
            password: password,
        })
        .then((response) => {
            if(response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        })
    },
    registerGuest(values: valuesTypes) {
        return axios.post(API + 'signupUser', {
            email: values.email,
            password: values.password,
            passwordConfirm: values.passwordConfirm,
            name: values.name,
            surename: values.surename,
            gender: values.gender,
            dateOfBirth: values.dateOfBirth,
            state: values.state,
            city: values.city,
            postalCode: values.postalCode,
            streetName: values.streetName,
            streetNumber: values.streetNumber,
        })
        .then(response => {
            return response
        })
    }
}

export default requests;