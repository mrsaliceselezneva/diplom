import Sidebar from 'components/Sidebar';
import styles from './styles.module.scss';


const View = (props) => {
    const { listOrTimeTable } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__admin}>
                <div className={styles.wrapper__admin__sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.wrapper__admin__main}>
                    {listOrTimeTable}
                </div>
            </div>
        </div>
    );
}

export default View;
