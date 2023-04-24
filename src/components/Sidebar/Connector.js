import { useSelector } from 'react-redux';
import { setSelectFilter, setLinkFilter } from '../../redux/slices/sidebarSlice';
import Controller from './Controller';

function Connector() {
    const { selectFilter } = useSelector((state) => state.sidebarReducer);
    return (
        <Controller
            setSelectFilter={setSelectFilter}
            setLinkFilter={setLinkFilter}
            selectFilter={selectFilter}
        />
    );
}

export default Connector;
