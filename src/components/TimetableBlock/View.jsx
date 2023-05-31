import styles from './styles.module.scss';


const View = (props) => {
    const { date, time, teacher, list } = props;
    const block = (id) => id % 2 ? styles.wrapper__list__block0 : styles.wrapper__list__block1;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__head}>
                <div className={styles.wrapper__head__title}>
                    <div className={styles.wrapper__head__title__time}>
                        {time}
                    </div>
                    {date &&
                        <div className={styles.wrapper__head__title__date}>
                            {date}
                        </div>
                    }
                </div>
                <div className={styles.wrapper__head__teacher}>
                    {teacher}
                </div>
            </div>
            <div className={styles.wrapper__list}>
                {/* <div className={styles.wrapper__head__input}>
                    {input}
                </div> */}
                {list.map((el, id) => <div className={block(id)} key={el + id}>{el}</div>)}
            </div>
        </div>
    )
}

export default View;
