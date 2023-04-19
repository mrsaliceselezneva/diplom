import AdminAddInstitution from 'components/AdminAddInstitution';
import AdminAddInstitutionAdmin from 'components/AdminAddInstitutionAdmin';

import AdminList from 'components/AdminList';
import AdminAddButton from 'components/AdminAddButton';

import Sidebar from 'components/Sidebar';

import styles from './styles.module.scss';


function View({ activeButton, setActiveButton, selectFilter, setSelectFilter }) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__admin}>
                <div className={styles.wrapper__admin__sidebar}>
                    <div onClick={() => setActiveButton(false)}>
                        <Sidebar />
                    </div>
                    {selectFilter === 'организации' ?
                        <div onClick={() => setActiveButton(true)}>
                            <AdminAddButton
                                setSelectAdd={() => { setSelectFilter('организации'); }}
                                title='добавить организацию'
                            />
                        </div>
                        :
                        <div onClick={() => setActiveButton(true)}>
                            <AdminAddButton
                                setSelectAdd={() => { setSelectFilter('пользователи'); }}
                                title='добавить пользователя'
                            />
                        </div>
                    }
                </div>
                <div className={styles.wrapper__admin__main}>
                    {activeButton && selectFilter === 'организации' && <AdminAddInstitution />}
                    {activeButton && selectFilter === 'пользователи' && <AdminAddInstitutionAdmin />}
                    {!activeButton && <AdminList />}
                </div>
            </div>
        </div>
    );
}

export default View;
