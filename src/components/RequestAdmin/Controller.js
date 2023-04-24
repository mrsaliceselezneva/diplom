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
