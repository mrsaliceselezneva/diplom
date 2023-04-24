import { useSelector } from 'react-redux';
import Controller from './Controller';


const dict = {
    'id': 'id',
    'last_name': 'фамилия',
    'first_name': 'имя',
    'patronymic': 'отчество',
    'email': 'почта',
    'institution_id': 'организация',
    'is_admin': 'администратор',
    'is_teacher': 'учитель',
    'is_superuser': 'суперпользователь',

    'name': 'название',
    'address': 'адрес',

    'type': 'тип',
    'multitasking': 'дистант',

    'time_start': 'начало',
    'pause': 'длится'
}

function Connector() {
    const { linkFilter } = useSelector((state) => state.sidebarReducer);

    return (
        <Controller 
            dict={dict}
            linkFilter={linkFilter}
        />
    );
}

export default Connector;
