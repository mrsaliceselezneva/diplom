import AdminList from 'components/AdminList';
import Sidebar from 'components/Sidebar/Sidebar';
import AddTeacher from 'components/AddTeacher';

import AddClassroom from 'components/AddClassroom';
import styles from './styles.module.scss';


function View({ selectButton, activeButton, setActiveButton, selectFilter }) {

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
                    {activeButton && selectFilter === 'учителя' && <AddTeacher />}
                    {activeButton && selectFilter === 'кабинеты' && <AddClassroom />}
                    {!activeButton && <AdminList />}
                </div>
            </div>
        </div>
    );
}

export default View;
