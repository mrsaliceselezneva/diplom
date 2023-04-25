import axios from 'axios';
import { useEffect, useState } from 'react';
import getCurrentSquare from './helpers';
import Controller from './Controller';


const Connector = (props) => {
    const { id, keys, val } = props;

    const [inst, setInst] = useState({});
    const sliceSize = 4;

    useEffect(() => {
        // eslint-disable-next-line no-restricted-syntax
        for (const [, key] of Object.entries(keys.slice(0, sliceSize))) {
            if (key === 'institution_id') {
                axios
                    .get(`${process.env.REACT_APP_API_URL}/institution/${val[key]}`)
                    .then((responce) => {
                        setInst({ 'institution_id': responce.data.name, ...inst })
                    });
            }
        }
    }, []);

    return (
        <Controller 
            id={id}
            keys={keys.slice(0, sliceSize)}
            val={val}
            inst={inst}
            getCurrentSquare={getCurrentSquare}
        />
    );
}

export default Connector;
