import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import RequestAdmin from 'components/RequestAdmin/RequestAdmin';
import RequestInstitution from 'components/RequestInstitution/RequestInstitution';
import styles from './styles.module.scss';

import RequestConnector from './RequestConnector';

import { setClear } from '../../redux/slices/requestSlice';

function RequestController() {
    const dispatch = useDispatch();
    const {
        adminName,
        adminLastname,
        adminPatronymic,
        adminEmail,
        adminPhone,
        adminPassword,
        institutionName,
        institutionEmail,
        institutionAddress,
    } = useSelector((state) => state.requestReducer);

    const data = {
        adminName,
        adminLastname,
        adminPatronymic,
        adminEmail,
        adminPhone,
        adminPassword,
        institutionName,
        institutionEmail,
        institutionAddress,
    };

    const [active, setActive] = useState(false);

    return (
        <RequestConnector 
            data={data}
            active={active}
            setActive={setActive}
            setClear={dispatch(setClear)}
            RequestAdmin={<RequestAdmin />}
            RequestInstitution={<RequestInstitution />}
            styles={styles}
            axios={axios}
        />
    );
}

export default RequestController;
