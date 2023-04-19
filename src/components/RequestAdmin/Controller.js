import { useRef } from 'react';
import View from './View';


function Controller({dispatch, setAdminLastName, setAdminName, setAdminPatronymic, setAdminEmail, setAdminPhone, setAdminPassword}) {
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
        if (val.length < 4) return `+7 (${val}`;
        if (val.length < 7) return `+7 (${val.slice(0, 3)}) ${val.slice(3)}`;
        return `+7 (${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6, 10)}`;
    }

    return (
        <View 
        dispatch={dispatch}
        setAdminLastName={setAdminLastName}
        setAdminName={setAdminName}
        setAdminPatronymic={setAdminPatronymic}
        setAdminEmail={setAdminEmail}
        setAdminPhone={setAdminPhone}
        setAdminPassword={setAdminPassword}
        normalizeText={normalizeText}
        normalizePhone={normalizePhone}
        ref={ref}
        />
    );
}

export default Controller;
