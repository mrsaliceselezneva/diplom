import { normalizeText, normalizePhone } from 'utils/helpers';
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

    return (
        <Controller 
            setAdminLastName={setAdminLastName}
            setAdminName={setAdminName}
            setAdminPatronymic={setAdminPatronymic}
            setAdminEmail={setAdminEmail}
            setAdminPhone={setAdminPhone}
            setAdminPassword={setAdminPassword}
            normalizeText={normalizeText}
            normalizePhone={normalizePhone}
        />
    );
}

export default Connector;
