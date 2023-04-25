import AdminList from 'components/AdminList';
import Sidebar from 'components/Sidebar';
import styles from './styles.module.scss';


const View = (props) => {
    const { selectButton, activeButton, whichAdd, hideAdd } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__admin}>
                <div className={styles.wrapper__admin__sidebar}>
                    <div onClick={hideAdd}>
                        <Sidebar />
                    </div>
                    {selectButton}
                </div>
                <div className={styles.wrapper__admin__main}>
                    {whichAdd}
                    {!activeButton && <AdminList />}
                </div>
            </div>
        </div>
    );
}

export default View;
