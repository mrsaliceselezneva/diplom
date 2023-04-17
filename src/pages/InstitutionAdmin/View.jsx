import AdminList from 'components/AdminList/AdminList';

import Sidebar from 'components/Sidebar/Sidebar';

import styles from './styles.module.scss';


function View({ selectButton, activeButton, setActiveButton }) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__admin}>
                <div className={styles.wrapper__admin__sidebar}>
                    <div onClick={() => setActiveButton(false)}>
                        <Sidebar />
                    </div>
                    {selectButton}
                </div>
                <div className={styles.wrapper__admin__main}>
                    {!activeButton && <AdminList />}
                </div>
            </div>
        </div>
    );
}

export default View;
