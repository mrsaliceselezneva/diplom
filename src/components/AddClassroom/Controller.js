import { useRef } from 'react';
import sendRequest from 'api/utils';
import View from './View';

function Controller() {
    const nameRef = useRef(null);
    const typeRef = useRef(null);
    const multitaskingRef = useRef(false);
    
    const ref = {
        nameRef,
        typeRef,
        multitaskingRef
    };

    function createClassroom(){
        const data = {
            name: nameRef.current.value,
            type: typeRef.current.value,
            multitasking: multitaskingRef.current.checked,
            institution_id: '2'
        };
          
        sendRequest('/classroom', 'post', data);
    }

    return (
        <View
            ref={ref}
            createClassroom={() => createClassroom()}
        />
    );
}

export default Controller;
