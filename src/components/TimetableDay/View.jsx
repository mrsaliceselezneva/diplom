import TimetableBlock from 'components/TimetableBlock';
import styles from './styles.module.scss';

const View = (props) => {
    const { listLesson } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__day}>
                {listLesson.map((val, id) =>
                    <TimetableBlock
                        key={val.call + val.teacher + id}
                        date={val.date}
                        time={val.call}
                        teacher={val.teacher}
                        list={Array(...val.group)}
                    />
                )}
            </div>
        </div>
    );
};

export default View;
