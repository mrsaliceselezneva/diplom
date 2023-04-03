import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import styles from './Sidebar.module.scss';
import SidebarBlock from '../SidebarBlock/SidebarBlock';

import { useSelector, useDispatch } from 'react-redux';
import { setSelectFilter } from '../../redux/slices/sidebarSlice';

function Sidebar() {
    const [filters, setFilters] = useState(['организации', 'пользователи']);

    const dispatch = useDispatch();
    const { selectFilter } = useSelector((state) => state.sidebarReducer);

    return (
        <div className={styles.sidebar}>
            {filters.map((filter, id) => (
                <SidebarBlock
                    key={filter}
                    changeSelectGameType={() => {
                        dispatch(setSelectFilter(filter));
                    }}
                    gameType={filter}
                    select={selectFilter === filter}
                />
            ))}
        </div>
    );
}

export default Sidebar;
