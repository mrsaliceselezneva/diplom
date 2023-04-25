import { useRef } from 'react';
import sendRequest from 'api/utils';
import View from './View';

const Controller = () => {
    const nameRef = useRef(null);

    function createGroup(){
        const data = {
            name: nameRef.current.value,
            institution_id: '2'
        };
          
        sendRequest('/group', 'post', data);
    }

    return (
        <View
            ref={nameRef}
            create={() => createGroup()}
        />
    );
}

export default Controller;
