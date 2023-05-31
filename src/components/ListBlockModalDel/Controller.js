import sendRequest from 'api/utils';
import { useSelector } from 'react-redux';
import View from './View';

const Controller = (props) => {
    const { id, showModal, onClose } = props;
    const { linkFilter } = useSelector((state) => state.sidebarReducer);

    
    const onDel = () => {
        console.log('lol');
        sendRequest(`/${linkFilter.split('?')[0]}/${id}/`, 'delete');
        window.location.reload();
    };


    return (
        <View
            id={id}
            showModal={showModal}
            onClose={onClose}
            onDel={onDel}
        />
    );
}

export default Controller;
