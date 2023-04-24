import { normalizePhone, normalizeText } from 'utils/helpers';
import Controller from './Controller';

function Connector() {
    return (
       <Controller 
            normalizePhone={normalizePhone}
            normalizeText={normalizeText}
       />
    );
}

export default Connector;
