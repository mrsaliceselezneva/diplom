import { useRef } from 'react';
import sendRequest from 'api/utils';
import View from './View';

function Controller({normalizeText, normalizePhone}) {
    const nameRef = useRef(null);
    const lastnameRef = useRef(null);
    const patronymicRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const teacherRef = useRef(false);
    const adminRef = useRef(false);
    
    const ref = {
        nameRef,
        lastnameRef,
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
            last_name: lastnameRef.current.value,
            patronymic: patronymicRef.current.value,
            institution_id: '2',
            is_teacher: teacherRef.current.checked,
            is_admin: adminRef.current.checked,
            phone: phoneRef.current.value,
            password: passwordRef.current.value
        };
          
        sendRequest('/auth/users/', 'post', data);
    }

    return (
        <View
            normalizeText={normalizeText}
            normalizePhone={normalizePhone}
            ref={ref}
            createTeacher={() => createTeacher()}
        />
    );
}

export default Controller;
