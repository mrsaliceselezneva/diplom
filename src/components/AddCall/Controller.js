import { useRef } from 'react';
import sendRequest from 'api/utils';
import View from './View';

function Controller() {
    const timeRef = useRef(null);
    const pauseRef = useRef(null);
    
    const ref = {
        timeRef,
        pauseRef
    };

    function createCall(){
        const data = {
            time_start: '18:45:00',
            pause: '01:00:00',
            institution_id: '2'
        };
          console.log(data);
        sendRequest('/call', 'post', data);
    }

    return (
        <View
            ref={ref}
            createCall={() => createCall()}
        />
    );
}

export default Controller;
