import { normalizePhone, normalizeText } from 'utils/helpers';
import { useRef } from 'react';
import View from './View';

const Controller = () => {
    const nameRef = useRef(null);
    const lastNameRef = useRef(null);
    const patronymicRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const ref = {
        nameRef,
        lastNameRef,
        patronymicRef,
        phoneRef,
        emailRef,
        passwordRef
    };

    const changeLastname = () => {lastNameRef.current.value = normalizeText(lastNameRef.current.value)}
    const changeName = () => {nameRef.current.value = normalizeText(nameRef.current.value)}
    const changePatronymic = () => {patronymicRef.current.value = normalizeText(patronymicRef.current.value)}
    const changePhone = () => {phoneRef.current.value = normalizePhone(phoneRef.current.value)}

    return (
        <View
            changeLastname={changeLastname}
            changeName={changeName}
            changePatronymic={changePatronymic}
            changePhone={changePhone}
            ref={ref}
        />
    );
}

export default Controller;
