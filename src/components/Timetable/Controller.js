import axios from 'axios';
import { useState, useEffect } from 'react';

import View from './View';


const Controller = (props) => {
    const {weekdayList, linkFilter} = props;

    const [list, setList] = useState(['раз', 'два', 'три']);
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/${linkFilter}`)
            .then((response) => {
                setList(response.data);
                const mas = [];
                // eslint-disable-next-line no-restricted-syntax
                for (const [key] of Object.entries(response.data[0])) {
                    mas.push(key);
                }
                setKeys(mas);
            })
            .catch((error) => {
                setList([]);
                setKeys([]);
                console.log(error);
            });
    }, [linkFilter]);

    return (
        <View 
            weekdayList={weekdayList}
            list={list}
        />
    );
}

export default Controller;
