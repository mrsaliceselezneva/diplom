import MissLessonList from 'components/MissLessonList';
import Timetable from 'components/Timetable';

import { useSelector } from 'react-redux';

import View from './View';


const Controller = () => {
    const { selectFilter } = useSelector((state) => state.sidebarReducer);

    function listOrTimeTable() {
        if (selectFilter === 'провести'){
            return <MissLessonList />
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
