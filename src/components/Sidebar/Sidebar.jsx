import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import styles from './Sidebar.module.scss';
import SidebarBlock from '../SidebarBlock/SidebarBlock';

import { setSelectFilter } from '../../redux/slices/sidebarSlice';

function Sidebar() {
    const [filters] = useState(['организации', 'пользователи']);

    const dispatch = useDispatch();
    const { selectFilter } = useSelector((state) => state.sidebarReducer);

    return (
        <div className={styles.sidebar}>
            {filters.map((filter) => (
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
