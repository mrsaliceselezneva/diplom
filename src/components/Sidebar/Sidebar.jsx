import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import styles from './Sidebar.module.scss';
import SidebarBlock from '../SidebarBlock/SidebarBlock';

import { setSelectFilter, setLinkFilter } from '../../redux/slices/sidebarSlice';

function Sidebar() {
    const [filters] = useState([{ name: 'организации', link: 'institution' }, { name: 'пользователи', link: 'users' }]);

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
