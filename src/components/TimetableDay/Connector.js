import { useSelector } from 'react-redux';
import Controller from './Controller';

const Connector = (props) => {
    const {weekday} = props;
    const { linkFilter } = useSelector((state) => state.sidebarReducer);

    return (
        <Controller 
            weekday={weekday}
            linkFilter={linkFilter}
        />
    );
}

export default Connector;
