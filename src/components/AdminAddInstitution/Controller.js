import { useDispatch } from 'react-redux';
import { useRef } from 'react';

import View from './View';

function Controller({setInstitutionName, setInstitutionEmail}) {
    const dispatch = useDispatch();
    

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);

    const ref = {
        nameRef, 
        emailRef, 
        addressRef
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
