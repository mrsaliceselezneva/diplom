import { useEffect, useState } from 'react';
import sendRequest from 'api/utils';
import View from './View';
import getCurrentSquare from './helpers';

const dict = {
    'id': 'id',
    'last_name': 'фамилия',
    'first_name': 'имя',
    'patronymic': 'отчество',
    'email': 'почта',
    'group_id': 'группа',
    'missed': 'пропущено',
    'left': 'осталось'
}

const Controller = (props) => {
    const { id, keys, val, showModal, onClose } = props;

    const [sendData, setSendData] = useState({});
    const [left, setLeft] = useState(val.left);
    const upLeft = () => {setLeft(left + 1)}
    const downLeft = () => {
        if (left - 1 >= val.left) 
            setLeft(left - 1)
    }
    
    const onUpdate = () => {
        sendData.left = left;
        sendRequest(`/student/${id}/`, 'put', sendData);
        window.location.reload();
    };

    useEffect(() => {
        setSendData(JSON.parse(JSON.stringify(val)));
        // eslint-disable-next-line no-return-assign
        sendRequest(`/group?id=${val.group_id}`, 'get').then((data) => val.group_id = data[0].name);
    }, []);

    return (
        <View
            id={id}
            keys={keys}
            val={val}
            getCurrentSquare={getCurrentSquare}
            showModal={showModal}
            onClose={onClose}
            onUpdate={onUpdate}
            dict={dict}
            upLeft={upLeft}
            downLeft={downLeft}
            left={left}
        />
    );
}

export default Controller;
