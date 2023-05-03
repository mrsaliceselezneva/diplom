import { useSelector } from 'react-redux';
import Controller from './Controller';


const weekdayList  = [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
];

const Connector = () => {
    const { linkFilter } = useSelector((state) => state.sidebarReducer);

    return (
        <Controller 
            weekdayList={weekdayList}
            linkFilter={linkFilter}
        />
    );
}

export default Connector;
