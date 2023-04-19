import View from './View';

function Controller({dispatch, selectFilter, setSelectFilter, activeButton, setActiveButton}) {
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
