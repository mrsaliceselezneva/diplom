import axios from 'axios';
import { useDispatch } from 'react-redux';

import View from './View';

import { setClear } from '../../redux/slices/requestSlice';

function Controller({active, setActive, data}) {
    const dispatch = useDispatch();

    function send() {
        axios.post(`${process.env.REACT_APP_API_URL}/request`, data).then(() => {
            dispatch(setClear);
        });
    }

    return (
        <View 
            send={() => send()}
            active={active}
            setActive={setActive}

        />
    );
}

export default Controller;
