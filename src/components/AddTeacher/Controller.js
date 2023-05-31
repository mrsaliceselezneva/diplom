import { useRef } from 'react';
import { normalizePhone, normalizeText } from 'utils/helpers';
import sendRequest from 'api/utils';
import View from './View';

const Controller = () => {
    const nameRef = useRef(null);
    const lastNameRef = useRef(null);
    const patronymicRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const teacherRef = useRef(true);
    const adminRef = useRef(false);
    
    const ref = {
        nameRef,
        lastNameRef,
        patronymicRef,
        phoneRef,
        emailRef,
        passwordRef,
        teacherRef,
        adminRef
    };

    function createTeacher(){
        const data = {
            email: emailRef.current.value,
            username: emailRef.current.value,
            first_name: nameRef.current.value,
            last_name: lastNameRef.current.value,
            patronymic: patronymicRef.current.value,
            institution_id: '2',
            is_teacher: teacherRef.current.checked,
            is_admin: adminRef.current.checked,
            phone: phoneRef.current.value,
            password: passwordRef.current.value
        };
          
        sendRequest('/auth/users/', 'post', data);
    }

    const changeLastname = () => {lastNameRef.current.value = normalizeText(lastNameRef.current.value)}
    const changeName = () => {nameRef.current.value = normalizeText(nameRef.current.value)}
    const changePatronymic = () => {patronymicRef.current.value = normalizeText(patronymicRef.current.value)}
    const changePhone = () => {phoneRef.current.value = normalizePhone(phoneRef.current.value)}

    return (
        <View
            ref={ref}
            createTeacher={() => createTeacher()}
            changeLastname={changeLastname}
            changeName={changeName}
            changePatronymic={changePatronymic}
            changePhone={changePhone}
        />
    );
}

export default Controller;
