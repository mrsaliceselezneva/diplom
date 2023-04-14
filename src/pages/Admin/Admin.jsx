import { useSelector, useDispatch } from 'react-redux';

import AdminAddInstitution from 'components/AdminAddInstitution/AdminAddInstitution';
import AdminAddInstitutionAdmin from 'components/AdminAddInstitutionAdmin/AdminAddInstitutionAdmin';

import AdminList from 'components/AdminList/AdminList';
import AdminAddButton from 'components/AdminAddButton/AdminAddButton';

import Sidebar from 'components/Sidebar/Sidebar';

import { setSelectFilter } from 'redux/slices/sidebarSlice';
import { useState } from 'react';
import styles from './Admin.module.scss';


function Admin() {
    const dispatch = useDispatch();
    const { selectFilter } = useSelector((state) => state.sidebarReducer);

    const [activeButton, setActiveButton] = useState(false);

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
                                setSelectAdd={() => { dispatch(setSelectFilter('организации')); }}
                                title='добавить организацию'
                            />
                        </div>
                        :
                        <div onClick={() => setActiveButton(true)}>
                            <AdminAddButton
                                setSelectAdd={() => { dispatch(setSelectFilter('пользователи')); }}
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

export default Admin;
