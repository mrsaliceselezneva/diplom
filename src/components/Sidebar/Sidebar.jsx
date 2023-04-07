import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import styles from './Sidebar.module.scss';
import SidebarBlock from '../SidebarBlock/SidebarBlock';

import { setSelectFilter, setLinkFilter } from '../../redux/slices/sidebarSlice';

function Sidebar() {
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
                { name: 'учителя', link: 'teachers?institution=2' },
                { name: 'кабинеты', link: '' },
                { name: 'звонки', link: '' },
                { name: 'ученики', link: '' }
            ]);
        }
    }, [window.location.href]);

    const dispatch = useDispatch();
    const { selectFilter } = useSelector((state) => state.sidebarReducer);
    return (
        <div className={styles.sidebar}>
            {filters.map((filter) => (
                <SidebarBlock
                    key={filter.name}
                    changeSelectGameType={() => {
                        dispatch(setSelectFilter(filter.name));
                        dispatch(setLinkFilter(filter.link));
                    }}
                    gameType={filter.name}
                    select={selectFilter === filter.name}
                />
            ))}
        </div>
    );
}

export default Sidebar;
