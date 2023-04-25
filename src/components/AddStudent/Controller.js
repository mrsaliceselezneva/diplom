import { useEffect, useRef, useState } from 'react';
import { normalizeText } from 'utils/helpers';
import sendRequest from 'api/utils';
import View from './View';

const Controller = () => {
    const nameRef = useRef(null);
    const lastNameRef = useRef(null);
    const patronymicRef = useRef(null);
    const emailRef = useRef(null);
    const groupRef = useRef(null);
    
    const ref = {
        nameRef,
        lastNameRef,
        patronymicRef,
        emailRef,
        groupRef
    };

    const [groupList, setGroupList] = useState([]);
    const [group, setGroup] = useState({});

    function createStudent(){
        const data = {
            email: emailRef.current.value,
            last_name: lastNameRef.current.value,
            first_name: nameRef.current.value,
            patronymic: patronymicRef.current.value,
            institution_id: '2',
            group_id: group[groupRef.current.value]
        };
          
        sendRequest('/student', 'post', data);
    }

    const changeLastname = () => {lastNameRef.current.value = normalizeText(lastNameRef.current.value)}
    const changeName = () => {nameRef.current.value = normalizeText(nameRef.current.value)}
    const changePatronymic = () => {patronymicRef.current.value = normalizeText(patronymicRef.current.value)}

    useEffect(() => {
        sendRequest('/group?institution=2', 'get').then((data) => {
            setGroupList(data.map((val) => val.name));
            const obj = {};
            data.forEach((val) => {obj[val.name] = val.id});
            setGroup(obj);
        });
    }, []);

    return (
        <View
            ref={ref}
            mas={groupList}
            createStudent={() => createStudent()}
            changeLastname={changeLastname}
            changeName={changeName}
            changePatronymic={changePatronymic}
        />
    );
}

export default Controller;
