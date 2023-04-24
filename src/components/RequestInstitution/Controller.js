import { useRef } from 'react';
import View from './View';

function Controller({dispatch, setInstitutionName, setInstitutionEmail}) {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const ref = {
        nameRef,
        emailRef
    }

    return (
       <View
            dispatch={dispatch}
            setInstitutionName={setInstitutionName}
            setInstitutionEmail={setInstitutionEmail}
            ref={ref}
       />
    );
}

export default Controller;
