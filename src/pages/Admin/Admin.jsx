import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';

import styles from './Admin.module.scss';

function Admin() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__admin}>
                <Sidebar />
                <div className={styles.wrapper__admin__main}></div>
            </div>
        </div>
    );
}

export default Admin;
