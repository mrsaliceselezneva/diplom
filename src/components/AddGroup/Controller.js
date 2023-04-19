import { useRef } from 'react';
import sendRequest from 'api/utils';
import View from './View';

function Controller() {
    const nameRef = useRef(null);

    function create(){
        const data = {
            name: nameRef.current.value,
            institution_id: '2'
        };
          
        sendRequest('/group', 'post', data);
    }

    return (
        <View
            ref={nameRef}
            create={() => create()}
        />
    );
}

export default Controller;
