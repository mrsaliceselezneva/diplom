import sendRequest from 'api/utils';
import { useRef } from 'react';

import { useDispatch } from 'react-redux';

import { setRefreshToken, setAccessToken } from '../../redux/slices/tokenSlice';

import View from './View';

const Controller = () => {
    const dispatch = useDispatch();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const ref = {emailRef, passwordRef};

    function login() {
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        sendRequest('/token/', 'post', data).then((responceData) => {
            dispatch(setRefreshToken(responceData.refresh));
                dispatch(setAccessToken(responceData.access));
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <View 
            login={() => login()}
            ref={ref}
        />
    );   
}

export default Controller;
