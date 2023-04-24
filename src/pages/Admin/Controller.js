import { useDispatch } from 'react-redux';
import View from './View';

function Controller({selectFilter, setSelectFilter, activeButton, setActiveButton}) {
    const dispatch = useDispatch();
    
    const updateSelectFilter = (value) => {
        dispatch(setSelectFilter(value));
    }

    return (
       <View 
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            selectFilter={selectFilter}
            setSelectFilter={updateSelectFilter}
       />
    );
}

export default Controller;
