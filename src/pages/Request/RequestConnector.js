import { useState } from 'react';
import { useSelector } from 'react-redux';

import RequestController from './RequestController';


function RequestConnector() {
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

    const [active, setActive] = useState(false);

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

    return (
        <RequestController 
            active={active}
            setActive={setActive}
            data={data}
        />
    );
}

export default RequestConnector;
