import { useDispatch } from 'react-redux';
import View from './View';

const Controller = (props) => {
    const {selectFilter, setSelectFilter, activeButton, setActiveButton} = props;
    const dispatch = useDispatch();

    const showAdd = () => setActiveButton(true);
    const hideAdd = () => setActiveButton(false);

    const selectnstitution = () => dispatch(setSelectFilter('организации'));
    const selectUser = () => dispatch(setSelectFilter('пользователи'));

    return (
       <View 
            activeButton={activeButton}
            selectFilter={selectFilter}
            showAdd={showAdd}
            hideAdd={hideAdd}
            selectnstitution={selectnstitution}
            selectUser={selectUser}
       />
    );
}

export default Controller;
