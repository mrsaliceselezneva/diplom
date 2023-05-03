import AdminList from 'components/AdminList';
import Timetable from 'components/Timetable';

import { useSelector } from 'react-redux';

import View from './View';


const Controller = () => {
    const { selectFilter } = useSelector((state) => state.sidebarReducer);

    function listOrTimeTable() {
        if (selectFilter === 'провести'){
            return <AdminList />
        }
        if (selectFilter === 'расписание'){
            return <Timetable />
        }
        return null;
    }

    return (
        <View 
            listOrTimeTable={listOrTimeTable()}
        />
    );
}

export default Controller;
