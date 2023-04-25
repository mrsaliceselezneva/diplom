import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { setInstitutionName, setInstitutionEmail } from '../../redux/slices/requestSlice';

import View from './View';

const Controller = () => {
    const dispatch = useDispatch();
    

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);

    const ref = {
        nameRef, 
        emailRef, 
        addressRef
    }

    const changeName = () => {
        const institutionName = nameRef.current.value;
        dispatch(setInstitutionName(institutionName));
    }
    const changeEmail = () => {
        const institutionEmail = emailRef.current.value;
        dispatch(setInstitutionEmail(institutionEmail));
    }

    return (
       <View 
            changeName={changeName}
            changeEmail={changeEmail}
            ref={ref}
       />
    );
}

export default Controller;
