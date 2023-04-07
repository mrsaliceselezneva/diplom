import { useSelector, useDispatch } from 'react-redux';

import AdminAddInstitution from 'components/AdminAddInstitution/AdminAddInstitution';
import AdminAddInstitutionAdmin from 'components/AdminAddInstitutionAdmin/AdminAddInstitutionAdmin';

import AdminList from 'components/AdminList/AdminList';
import AdminAddButton from 'components/AdminAddButton/AdminAddButton';

import Sidebar from 'components/Sidebar/Sidebar';

import { setSelectFilter } from 'redux/slices/sidebarSlice';
import { useState } from 'react';
import styles from './InstitutionAdmin.module.scss';


function InstitutionAdmin() {
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
                </div>
                <div className={styles.wrapper__admin__main}>
                    {!activeButton && <AdminList />}
                </div>
            </div>
        </div>
    );
}

export default InstitutionAdmin;
