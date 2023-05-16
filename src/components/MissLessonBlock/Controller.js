import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import sendRequest from 'api/utils';
import View from './View';

import { setClearStudent } from '../../redux/slices/missLessonSlice';


const Controller = (props) => {
    const { id, showKeys, keys, val } = props;
    
    const dispatch = useDispatch();
    const { studentList } = useSelector((state) => state.missLessonReducer);

    const [showModal, setShowModal] = useState(false);
    
    const onOpen = () => {
        dispatch(setClearStudent());
        setShowModal(true);
    }
    const onClose = () => {
        dispatch(setClearStudent());
        setShowModal(false);
    }
    const onUpdate = () => {
        console.log(val);
        let wasNotStudent = val.group;
        studentList.forEach((student) => {
            wasNotStudent = wasNotStudent.filter((el) => el.id !== student.id);
            sendRequest(`/student/${student.id}/`, 'get').then((data) => {
                console.log(data);
                if (data.missed > 0)
                    data.missed -= 1;
                else
                    data.left -= 1;
                sendRequest(`/student/${student.id}/`, 'put', data);
            });
        });
        wasNotStudent.forEach((student) => {
            sendRequest(`/student/${student.id}/`, 'get').then((data) => {
                if (data.left < 0)
                    data.left += 1;
                else
                    data.missed += 1;
                sendRequest(`/student/${student.id}/`, 'put', data);
            });
        });
        dispatch(setClearStudent());
        setShowModal(false);
        sendRequest(`/misslesson/${val.id}/`, 'delete');
        window.location.reload();
    }

    return (
        <View
            id={id}
            showKeys={showKeys}
            keys={keys}
            val={val}
            showModal={showModal}
            onOpen={onOpen}
            onClose={onClose}
            onUpdate={onUpdate}
        />
    );
}

export default Controller;
