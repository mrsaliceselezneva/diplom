import { useDispatch } from 'react-redux';
import Controller from './Controller';

import {
    setAdminEmail,
    setAdminLastName,
    setAdminName,
    setAdminPassword,
    setAdminPatronymic,
    setAdminPhone,
} from '../../redux/slices/requestSlice';

function Connector() {
    const dispatch = useDispatch();

    return (
        <Controller 
            dispatch={dispatch}
            setAdminLastName={setAdminLastName}
            setAdminName={setAdminName}
            setAdminPatronymic={setAdminPatronymic}
            setAdminEmail={setAdminEmail}
            setAdminPhone={setAdminPhone}
            setAdminPassword={setAdminPassword}
        />
    );
}

export default Connector;
