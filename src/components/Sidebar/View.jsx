import styles from './styles.module.scss';
import SidebarBlock from '../SidebarBlock';

function View({ filters, dispatch, setSelectFilter, setLinkFilter, selectFilter }) {

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

export default View;
