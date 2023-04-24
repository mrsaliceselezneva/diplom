import { normalizeText } from 'utils/helpers';
import Controller from './Controller';

function Connector() {
    return (
       <Controller 
            normalizeText={normalizeText}
       />
    );
}

export default Connector;
