import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { setInstitutionEmail, setInstitutionName } from '../../redux/slices/requestSlice';
import View from './View';

const Controller = () => {
    const dispatch = useDispatch();

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const ref = {
        nameRef,
        emailRef
    }

    const changeName = () => {
        dispatch(setInstitutionName(ref.nameRef.current.value));
    }

    const changeEmail = () => {
        dispatch(setInstitutionEmail(ref.emailRef.current.value));
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
