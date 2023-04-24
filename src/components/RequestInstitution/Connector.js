import { setInstitutionEmail, setInstitutionName } from '../../redux/slices/requestSlice';

import Controller from './Controller';

function Connector() {

    return (
        <Controller
            setInstitutionName={setInstitutionName}
            setInstitutionEmail={setInstitutionEmail}
        />
    );
}

export default Connector;
