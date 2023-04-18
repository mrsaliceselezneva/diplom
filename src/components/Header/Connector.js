import { useSelector, useDispatch } from 'react-redux';

import { setLogout } from '../../redux/slices/tokenSlice';

import Controller from './Controller';


const institutionInfo = [
    'Код Успеха',
    'ул. Федерации, 148',
    'poluvesov.artyom@gmail.com',
    '89278070727',
];
const personalInfo = [
    'Полувесов',
    'Артём',
    'Алексеевич',
    'poluvesov.artyom@gmail.com',
    '89278070727',
]

function Connector() {
    const dispatch = useDispatch();
    const { refreshToken } = useSelector((state) => state.tokenReducer);

    return (
        <Controller 
            institutionInfo={institutionInfo}
            personalInfo={personalInfo}
            dispatch={dispatch}
            setLogout={setLogout}
            refreshToken={refreshToken}
        />
    );
}

export default Connector;
