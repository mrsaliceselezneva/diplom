import { useDispatch , useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { setSelectFilter, setLinkFilter } from '../../redux/slices/sidebarSlice';

import View from './View';

const Controller = () => {
    const { selectFilter } = useSelector((state) => state.sidebarReducer);
    const dispatch = useDispatch();
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        if (window.location.href === `${process.env.REACT_APP_URL}/admin`) {

            setFilters([
                { name: 'организации', link: 'institution' },
                { name: 'пользователи', link: 'users' }
            ]);
        }
        if (window.location.href === `${process.env.REACT_APP_URL}/institution/admin`) {
            setFilters([
                { name: 'учителя', link: 'teacher?institution=2' },
                { name: 'кабинеты', link: 'classroom?institution=2' },
                { name: 'звонки', link: 'call?institution=2' },
                { name: 'ученики', link: 'student?institution=2' },
                { name: 'группы', link: 'group?institution=2' },
                { name: 'занятия', link: 'lesson?institution=2' },
            ]);
        }
    }, [window.location.href]);

    return (
        <View
            filters={filters}
            dispatch={dispatch}
            setSelectFilter={setSelectFilter}
            setLinkFilter={setLinkFilter}
            selectFilter={selectFilter}
        />
    );
}

export default Controller;
