import { useSelector } from 'react-redux';
import Controller from './Controller';


const dict = {
    'weekday': 'день',
    'call_id': 'звонок',
    'date': 'дата'
}

const Connector = () => {
    const { linkFilter } = useSelector((state) => state.sidebarReducer);
    const showKeys = ['date', 'weekday', 'call_id'];

    return (
        <Controller 
            dict={dict}
            showKeys={showKeys}
            linkFilter={linkFilter}
        />
    );
}

export default Connector;
