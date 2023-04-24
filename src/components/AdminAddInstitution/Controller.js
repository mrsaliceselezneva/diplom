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

    const changeName = () => {dispatch(setInstitutionName(ref.nameRef.current.value))}
    const changeEmail = () => {dispatch(setInstitutionEmail(ref.emailRef.current.value))}

    return (
       <View 
            changeName={changeName}
            changeEmail={changeEmail}
            ref={ref}
       />
    );
}

export default Controller;
