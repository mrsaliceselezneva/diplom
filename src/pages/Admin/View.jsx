import AdminAddInstitution from 'components/AdminAddInstitution';
import AdminAddInstitutionAdmin from 'components/AdminAddInstitutionAdmin';

import AdminList from 'components/AdminList';
import AdminAddButton from 'components/AdminAddButton';

import Sidebar from 'components/Sidebar';

import styles from './styles.module.scss';


const View = (props) => {
    const { activeButton, selectFilter, hideAdd, showAdd, selectnstitution, selectUser } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__admin}>
                <div className={styles.wrapper__admin__sidebar}>
                    <div onClick={hideAdd}>
                        <Sidebar />
                    </div>
                    {selectFilter === 'организации' ?
                        <div onClick={showAdd}>
                            <AdminAddButton
                                setSelectAdd={selectnstitution}
                                title='добавить организацию'
                            />
                        </div>
                        :
                        <div onClick={showAdd}>
                            <AdminAddButton
                                setSelectAdd={selectUser}
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
