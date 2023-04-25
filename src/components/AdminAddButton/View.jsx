import styles from './styles.module.scss';

const View = (props) => {
    const { setSelectAdd, title } = props;
    return (
        <div className={styles.wrapper}>
            <button className={styles.wrapper__button} onClick={setSelectAdd}>
                {title}
            </button>
        </div>
    );
}

export default View;
