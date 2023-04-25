import { useEffect, useRef, useState } from 'react';
import sendRequest from 'api/utils';
import View from './View';

const Controller = () => {
    const teacherRef = useRef(null);
    const callRef = useRef(null);
    const classroomRef = useRef(null);
    const groupRef = useRef(null);
    const weekdayRef = useRef(null);

    const [teacherList, setTeacherList] = useState([]);
    const [callList, setCallList] = useState([]);
    const [classroomList, setClassroomList] = useState([]);
    const [groupList, setGroupList] = useState([]);
    const weekdayList= ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    const [teacherId, setTeacherId] = useState([]);
    const [callId, setCallId] = useState([]);
    const [classroomId, setClassroomId] = useState([]);
    const [groupId, setGroupId] = useState([]);
    
    const ref = {
        teacherRef,
        callRef,
        classroomRef,
        groupRef,
        weekdayRef
    };

    function createLesson(){
        const data = {
            teacher_id: teacherId[teacherRef.current.value],
            call_id: callId[callRef.current.value],
            classroom_id: classroomId[classroomRef.current.value],
            group_id: groupId[groupRef.current.value],
            institution_id: 2,
            weekday: weekdayRef.current.value
        };
        console.log(data);
        sendRequest('/lesson', 'post', data);
    }

    useEffect(() => {
        sendRequest('/teacher?institution=2', 'get').then((data) => {
            setTeacherList(data.map((val) => `${val.last_name} ${val.first_name} ${val.patronymic}`));
            const obj = {};
            data.forEach((val) => {obj[`${val.last_name} ${val.first_name} ${val.patronymic}`] = val.id});
            setTeacherId(obj);
        });
        sendRequest('/call?institution=2', 'get').then((data) => {
            setCallList(data.map((val) => `${val.time_start}`));
            const obj = {};
            data.forEach((val) => {obj[`${val.time_start}`] = val.id});
            setCallId(obj);
        });
        sendRequest('/classroom?institution=2', 'get').then((data) => {
            setClassroomList(data.map((val) => `${val.name} ${val.type}`));
            const obj = {};
            data.forEach((val) => {obj[`${val.name} ${val.type}`] = val.id});
            setClassroomId(obj);
        });
        sendRequest('/group?institution=2', 'get').then((data) => {
            setGroupList(data.map((val) => `${val.name}`));
            const obj = {};
            data.forEach((val) => {obj[`${val.name}`] = val.id});
            setGroupId(obj);
        });
    }, []);

    return (
        <View
            ref={ref}
            create={() => createLesson()}
            teacherList={teacherList}
            callList={callList}
            classroomList={classroomList}
            groupList={groupList}
            weekdayList={weekdayList}
        />
    );
}

export default Controller;
