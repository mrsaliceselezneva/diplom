import { useDispatch } from 'react-redux';
import { setInstitutionName, setInstitutionEmail } from '../../redux/slices/requestSlice';

import Controller from './Controller';

function Connector() {
    const dispatch = useDispatch();
    

    return (
       <Controller 
            dispatch={dispatch}
            setInstitutionName={setInstitutionName}
            setInstitutionEmail={setInstitutionEmail}
       />
    );
}

export default Connector;
