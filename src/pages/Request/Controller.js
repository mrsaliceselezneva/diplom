import axios from 'axios';
import { useDispatch } from 'react-redux';

import View from './View';

import { setClear } from '../../redux/slices/requestSlice';

const Controller = (props) => {
    const {active, setActive, data} = props;
    const dispatch = useDispatch();

    function sendRequest() {
        axios.post(`${process.env.REACT_APP_API_URL}/request`, data).then(() => {
            dispatch(setClear);
        });
    }

    return (
        <View 
            sendRequest={() => sendRequest()}
            active={active}
            setActive={setActive}

        />
    );
}

export default Controller;
