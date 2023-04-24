import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';


function View({ id, keys, val, inst, whichSquare }) {

    return (
        <div className={styles.wrapper}>
            <div key={val.id} className={id % 2 ? styles.wrapper__listblock0 : styles.wrapper__listblock1}>
                {keys.map((key) =>
                    <div key={val.id + key + val[key]} className={id % 2 ? styles.wrapper__listblock0__block : styles.wrapper__listblock1__block}>
                        {whichSquare(inst, key, val[key])}
                    </div>
                )}
            </div>
            <FiX className={id % 2 ? styles.wrapper__listblock0__del : styles.wrapper__listblock1__del} />
        </div>
    );
}

export default View;
