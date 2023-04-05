import { useSelector } from 'react-redux';
import AdminAddInstitution from 'components/AdminAddInstitution/AdminAddInstitution';
import AdminAddInstitutionAdmin from 'components/AdminAddInstitutionAdmin/AdminAddInstitutionAdmin';
import Sidebar from 'components/Sidebar/Sidebar';


import styles from './Admin.module.scss';

function Admin() {
    const { selectFilter } = useSelector((state) => state.sidebarReducer);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__admin}>
                <div className={styles.wrapper__admin__sidebar}>
                    <Sidebar />
                    {selectFilter === 'организации' ? <button /> : <button />}
                </div>
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
