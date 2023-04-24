import { useEffect, useRef, useState } from 'react';
import sendRequest from 'api/utils';
import View from './View';

function Controller() {
    const nameRef = useRef(null);
    const lastnameRef = useRef(null);
    const patronymicRef = useRef(null);
    const emailRef = useRef(null);
    const groupRef = useRef(null);
    
    const ref = {
        nameRef,
        lastnameRef,
        patronymicRef,
        emailRef,
        groupRef
    };

    const [groupList, setGroupList] = useState([]);
    const [group, setGroup] = useState({});

    const normalizeText = (value) => {
        if (!value) return '';
        const val = value.replace(/[^а-яёА-ЯЁ]/u, '');
        if (val.length > 0) return val[0].toUpperCase() + val.slice(1).toLowerCase();
        return '';
    }

    function create(){
        const data = {
            email: emailRef.current.value,
            last_name: lastnameRef.current.value,
            first_name: nameRef.current.value,
            patronymic: patronymicRef.current.value,
            institution_id: '2',
            group_id: group[groupRef.current.value]
        };
          
        sendRequest('/student', 'post', data);
    }

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
            normalizeText={normalizeText}
            ref={ref}
            mas={groupList}
            create={() => create()}
        />
    );
}

export default Controller;
