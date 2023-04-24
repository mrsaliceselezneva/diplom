import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import View from './View';


function Controller({setAdminLastName, setAdminName, setAdminPatronymic, setAdminEmail, setAdminPhone, setAdminPassword, normalizeText, normalizePhone}) {
    const dispatch = useDispatch();

    const nameRef = useRef(null);
    const lastnameRef = useRef(null);
    const patronymicRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const ref = {
        nameRef,
        lastnameRef,
        patronymicRef,
        phoneRef,
        emailRef,
        passwordRef
    }

    const changeLastname = () => {
        lastnameRef.current.value = normalizeText(lastnameRef.current.value);
        dispatch(setAdminLastName(lastnameRef.current.value));
    }
    const changeName = () => {
        nameRef.current.value = normalizeText(nameRef.current.value);
        dispatch(setAdminName(nameRef.current.value));
    }
    const changePatronymic = () => {
        patronymicRef.current.value = normalizeText(patronymicRef.current.value);
        dispatch(setAdminPatronymic(patronymicRef.current.value));
    }
    const changeEmail = () => {dispatch(setAdminEmail(emailRef.current.value))}
    const changePhone = () => {
        phoneRef.current.value = normalizePhone(phoneRef.current.value);
        dispatch(setAdminPhone(phoneRef.current.value));
    }
    const changePassword = () => {
        dispatch(setAdminPassword(passwordRef.current.value));
    }

    return (
        <View 
            changeLastname={changeLastname}
            changeName={changeName}
            changePatronymic={changePatronymic}
            changeEmail={changeEmail}
            changePhone={changePhone}
            changePassword={changePassword}
            ref={ref}
        />
    );
}

export default Controller;
