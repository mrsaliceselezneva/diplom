import { useSelector } from 'react-redux';
import { useState } from 'react';

import Controller from './Controller';


function Connector() {
    const { selectFilter } = useSelector((state) => state.sidebarReducer);

    const [activeButton, setActiveButton] = useState(false);

    return (
       <Controller
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            selectFilter={selectFilter}
       />
    );
}

export default Connector;
