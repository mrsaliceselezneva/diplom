import { useSelector } from 'react-redux';

import { setSelectFilter } from 'redux/slices/sidebarSlice';
import { useState } from 'react';

import Controller from './Controller';


function Admin() {
    const { selectFilter } = useSelector((state) => state.sidebarReducer);

    const [activeButton, setActiveButton] = useState(false);

    return (
        <Controller 
            selectFilter={selectFilter}
            setSelectFilter={setSelectFilter}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
        />
    );
}

export default Admin;
