import { useSelector, useDispatch } from 'react-redux';
import { setSelectFilter, setLinkFilter } from '../../redux/slices/sidebarSlice';
import Controller from './Controller';

function Connector() {
    const dispatch = useDispatch();
    const { selectFilter } = useSelector((state) => state.sidebarReducer);
    return (
        <Controller
            dispatch={dispatch}
            setSelectFilter={setSelectFilter}
            setLinkFilter={setLinkFilter}
            selectFilter={selectFilter}
        />
    );
}

export default Connector;
