import axios from 'axios';
import { useDispatch } from 'react-redux';

import RequestView from './RequestView';

import { setClear } from '../../redux/slices/requestSlice';

function Request({active, setActive, data}) {
    const dispatch = useDispatch();

    function send() {
        axios.post(`${process.env.REACT_APP_API_URL}/request`, data).then(() => {
            dispatch(setClear);
        });
    }

    return (
        <RequestView 
            send={() => send()}
            active={active}
            setActive={setActive}
        />
    );
}

export default Request;
