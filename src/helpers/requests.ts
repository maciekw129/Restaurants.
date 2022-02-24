import axios from 'axios';

const API = 'https://desolate-journey-33475.herokuapp.com/';

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
}

export default requests;