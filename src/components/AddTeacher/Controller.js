import { useRef } from 'react';
import sendRequest from 'api/utils';
import View from './View';

function Controller() {
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

    const normalizeText = (value) => {
        if (!value) return '';
        const val = value.replace(/[^а-яёА-ЯЁ]/u, '');
        if (val.length > 0) return val[0].toUpperCase() + val.slice(1).toLowerCase();
        return '';
    }

    const normalizePhone = (value) => {
        if (!value) return '';
        let val;
        if (value.length === 1) val = value.replace(/[^\d]/g, '');
        else val = value.replace(/[^\d]/g, '').slice(1);
        if (val.length < 4) {
            return `+7 (${val}`;
        }
        if (val.length < 7) return `+7 (${val.slice(0, 3)}) ${val.slice(3)}`;
        return `+7 (${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6, 10)}`;
    }

    function createTeacher(){
        const data = {
            email: emailRef.current.value,
            username: emailRef.current.value,
            first_name: nameRef.current.value,
            last_name: lastnameRef.current.value,
            patronymic: patronymicRef.current.value,
            institution_id: '1',
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
