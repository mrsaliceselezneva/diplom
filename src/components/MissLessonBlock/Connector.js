import axios from 'axios';
import { useEffect, useState } from 'react';
import Controller from './Controller';


const Connector = (props) => {
    const { id, showKeys, keys, val } = props;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        // eslint-disable-next-line no-restricted-syntax
        for (const [, key] of Object.entries(keys)) {
            if (key === 'call_id') {
                axios
                    .get(`${process.env.REACT_APP_API_URL}/call/${val[key]}`)
                    .then((responce) => {
                        val.call_id = responce.data.time_start ;
                    });
            }
            if (key === 'teacher_id'){
                axios
                    .get(`${process.env.REACT_APP_API_URL}/teacher/${val[key]}`)
                    .then((responce) => {
                        val.teacher_id = `${responce.data.last_name} ${responce.data.first_name} ${responce.data.patronymic}` ;
                    });
            }
            if (key === 'classroom_id'){
                axios
                    .get(`${process.env.REACT_APP_API_URL}/classroom/${val[key]}`)
                    .then((responce) => {
                        val.classroom_id = `${responce.data.name}/${responce.data.type}` ;
                    });
            }
        }
        
        setTimeout(() => {
            setIsLoading(false);
        }, [500]);
    }, []);

    if (!isLoading){
        return (
            <Controller 
                id={id}
                showKeys={showKeys}
                keys={keys}
                val={val}
            />
        );
    }
    return null;
}

export default Connector;
