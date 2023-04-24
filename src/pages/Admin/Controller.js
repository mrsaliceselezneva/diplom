import { useDispatch } from 'react-redux';
import View from './View';

function Controller({selectFilter, setSelectFilter, activeButton, setActiveButton}) {
    const dispatch = useDispatch();

    const show = () => setActiveButton(true);
    const hide = () => setActiveButton(false);

    const selectnstitution = () => dispatch(setSelectFilter('организации'));
    const selectUser = () => dispatch(setSelectFilter('пользователи'));

    return (
       <View 
            activeButton={activeButton}
            selectFilter={selectFilter}
            show={show}
            hide={hide}
            selectnstitution={selectnstitution}
            selectUser={selectUser}
       />
    );
}

export default Controller;
