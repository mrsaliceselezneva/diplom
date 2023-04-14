import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import ReuqestAdmin from 'components/ReuqestAdmin/ReuqestAdmin';
import ReuqestInstitution from 'components/ReuqestInstitution/ReuqestInstitution';
import styles from './styles.module.scss';

import ReuqestConnector from './RequestConnector';

import { setClear } from '../../redux/slices/requestSlice';

function ReuqestController() {
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
        <ReuqestConnector 
            data={data}
            active={active}
            setActive={setActive}
            setClear={dispatch(setClear)}
            ReuqestAdmin={<ReuqestAdmin />}
            ReuqestInstitution={<ReuqestInstitution />}
            styles={styles}
            axios={axios}
        />
    );
}

export default ReuqestController;
