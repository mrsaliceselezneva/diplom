import TimetableBlock from 'components/TimetableBlock';
import styles from './styles.module.scss';

const mas = [
    {
        date: 'date',
        time: 'time',
        teacher: 'teacher',
        input: 'input',
        list: ['раз', 'два', 'три']
    },
    {
        date: 'date',
        time: 'time',
        teacher: 'teacher',
        input: 'input',
        list: ['раз', 'два', 'три']
    }
];

const View = () => (
    <div className={styles.wrapper}>
        <div className={styles.wrapper__day}>
            {mas.map((val, id) =>
                <TimetableBlock
                    key={val.date + val.time + val.teacher + id}
                    date={val.date}
                    time={val.time}
                    teacher={val.teacher}
                    input={val.input}
                    list={val.list}
                />
            )}
        </div>
    </div>
)

export default View;
