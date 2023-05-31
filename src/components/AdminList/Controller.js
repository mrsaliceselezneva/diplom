import axios from 'axios';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import View from './View';

import {
    changeNumPages,
    changeShowPages,
    changePage,
    changeFirstPage,
    changeMediumPage,
    changeLastPage,
} from '../../redux/slices/paginationSlice';




const Controller = (props) => {
    const {dict} = props;
    const { selectPage, numPages, showItems } = useSelector((state) => state.paginationReducer);
    const { linkFilter  } = useSelector((state) => state.sidebarReducer);
    const dispatch = useDispatch();

    const [list, setList] = useState([]);
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/${linkFilter}&limit=${showItems}&offset=${(selectPage - 1) * showItems}`)
            .then((response) => {
                setList(response.data.results);
                const n = Math.ceil(response.data.count / showItems);
                    if (n !== numPages) {
                        dispatch(changeFirstPage(1));
                        dispatch(changePage(1));
                        dispatch(changeNumPages(n));
                        if (n === 1) {
                            dispatch(changeLastPage(1));
                            dispatch(changeMediumPage(1));
                            dispatch(changeShowPages(1));
                        } else if (n === 2) {
                            dispatch(changeLastPage(2));
                            dispatch(changeMediumPage(1));
                            dispatch(changeShowPages(2));
                        } else if (n >= 3 && n < 5) {
                            dispatch(changeLastPage(3));
                            dispatch(changeMediumPage(2));
                            dispatch(changeShowPages(3));
                            console.log('lol4');
                    }
                    }
                const mas = [];
                // eslint-disable-next-line no-restricted-syntax
                for (const [key] of Object.entries(response.data.results[0])) {
                    mas.push(key);
                }
                setKeys(mas);
            })
            .catch((error) => {
                setList([]);
                setKeys([]);
                console.log(error);
            });
    }, [linkFilter, selectPage]);

    return (
        <View 
            keys={keys}
            dict={dict}
            list={list}
        />
    );
}

export default Controller;
