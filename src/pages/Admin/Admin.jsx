import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import AdminAddInstitution from '../../components/AdminAddInstitution/AdminAddInstitution';
import AdminAddInstitutionAdmin from '../../components/AdminAddInstitutionAdmin/AdminAddInstitutionAdmin';

import { useSelector } from 'react-redux';

import styles from './Admin.module.scss';

function Admin() {
    const { selectFilter } = useSelector((state) => state.sidebarReducer);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__admin}>
                <Sidebar />
                <div className={styles.wrapper__admin__main}>
                    {selectFilter === 'организации' ? (
                        <AdminAddInstitution />
                    ) : (
                        <AdminAddInstitutionAdmin />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Admin;
