import TimetableDay from 'components/TimetableDay';
import styles from './styles.module.scss';

const View = (props) => {
    const { weekdayList } = props;
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__week}>
                <div className={styles.wrapper__week__title}>
                    {weekdayList.map((weekday) => <div className={styles.wrapper__week__title__block} key={weekday}>{weekday}</div>)}
                </div>
                <div className={styles.wrapper__week__list}>
                    {weekdayList.map((weekday) => <div className={styles.wrapper__week__list__block} key={weekday}><TimetableDay /></div>)}
                </div>
            </div>
        </div>
    );
}

export default View;
