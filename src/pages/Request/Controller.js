import sendRequest from 'api/utils';
import { useDispatch } from 'react-redux';

import View from './View';

import { setClear } from '../../redux/slices/requestSlice';

const Controller = (props) => {
    const {active, setActive, data} = props;
    const dispatch = useDispatch();

    return (
        <View 
            sendRequest={() =>  sendRequest(`/request`, 'post', data).then(() => dispatch(setClear))}
            active={active}
            setActive={setActive}

        />
    );
}

export default Controller;
