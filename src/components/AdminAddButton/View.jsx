import styles from './styles.module.scss';

function View({ setSelectAdd, title }) {

    return (
        <div className={styles.wrapper}>
            <button className={styles.wrapper__button} onClick={setSelectAdd}>
                {title}
            </button>
        </div>
    );
}

export default View;
