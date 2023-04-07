import styles from './AdminAddButton.module.scss';

function AdminAddButton({ setSelectAdd, title }) {

    return (
        <div className={styles.wrapper}>
            <button className={styles.wrapper__button} onClick={setSelectAdd}>
                {title}
            </button>
        </div>
    );
}

export default AdminAddButton;
