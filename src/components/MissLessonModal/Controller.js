import { useEffect, useState } from 'react';
import sendRequest from 'api/utils';
import { useSelector } from 'react-redux';
import View from './View';
import getCurrentSquare from './helpers';



// const dict = {
//     'weekday': 'день недели',
//     'date': 'дата',
//     'teacher_id': 'учитель',
//     'call_id': 'звонок',
//     'group_id': 'группа',
//     'classroom_id': 'кабинет'
// }

const Controller = (props) => {
    const { id, val, showModal, onClose, onUpdate } = props;
    const { linkFilter } = useSelector((state) => state.sidebarReducer);

    const [isLoading, setIsLoading] = useState(true);


    const getStudent = (gid) => {
        const list = [];
         sendRequest(`/student?group=${gid}`, 'get').then((data) => {
            data.forEach((student) => list.push(
                {'name': `${student.last_name} ${student.first_name}`, 'id': student.id}
            ));
        });
        return list;
        
    }

    useEffect(() => {
        setIsLoading(true);
        val.group = getStudent(val.group_id);
            setTimeout(() => {
                setIsLoading(false);
            }, [500]);
    }, [linkFilter]);


    if (!isLoading){
        return (
            <View
                id={id}
                val={val}
                getCurrentSquare={getCurrentSquare}
                showModal={showModal}
                onClose={onClose}
                onUpdate={onUpdate}
            />
        );
    }
    return null;
}

export default Controller;
