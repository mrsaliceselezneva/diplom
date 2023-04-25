import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';


const View = (props) => {
    const { id, keys, val, inst, getCurrentSquare } = props;
    const classNameListblock = id % 2 ? styles.wrapper__listblock0 : styles.wrapper__listblock1;
    const classNameBlock = id % 2 ? styles.wrapper__listblock0__block : styles.wrapper__listblock1__block;

    return (
        <div className={styles.wrapper}>
            <div key={val.id} className={classNameListblock}>
                {keys.map((key) =>
                    <div key={val.id + key + val[key]} className={classNameBlock}>
                        {getCurrentSquare(inst, key, val[key])}
                    </div>
                )}
            </div>
            <FiX className={id % 2 ? styles.wrapper__listblock0__del : styles.wrapper__listblock1__del} />
        </div>
    );
}

export default View;
