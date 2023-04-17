import axios from 'axios';
import { useRef } from 'react';

import { useDispatch } from 'react-redux';

import { setRefreshToken, setAccessToken } from '../../redux/slices/tokenSlice';

import LoginView from './LoginView';

function LoginController() {
    const dispatch = useDispatch();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const ref = {emailRef, passwordRef};

    function login() {
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        axios
            .post(`${process.env.REACT_APP_API_URL}/token/`, data)
            .then((response) => {
                dispatch(setRefreshToken(response.data.refresh));
                dispatch(setAccessToken(response.data.access));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <LoginView 
            login={() => login()}
            ref={ref}
        />
    );   
}

export default LoginController;
