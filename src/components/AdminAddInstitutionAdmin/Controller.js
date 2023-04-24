import { useRef } from 'react';
import View from './View';

function Controller({normalizeText, normalizePhone}) {
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
    };

    return (
        <View
            normalizeText={normalizeText}
            normalizePhone={normalizePhone}
            ref={ref}
        />
    );
}

export default Controller;
