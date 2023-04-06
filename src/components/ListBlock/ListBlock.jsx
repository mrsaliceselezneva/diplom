import { FiCheckSquare, FiSquare, FiX } from 'react-icons/fi';
import styles from './ListBlock.module.scss';

function ListBlock({ id, keys, val }) {

    function whichSquare(v) {
        if (v === true)
            return <FiCheckSquare />;
        if (v === false)
            return <FiSquare />;
        return `${v}`;
    }

    return (
        <div className={styles.wrapper}>
            <div key={val.id} className={id % 2 ? styles.wrapper__listblock0 : styles.wrapper__listblock1}>
                {keys.slice(0, 4).map((key) =>
                    <div key={val.id + key + val[key]} className={id % 2 ? styles.wrapper__listblock0__block : styles.wrapper__listblock1__block}>
                        {whichSquare(val[key])}
                    </div>
                )}
            </div>
            <FiX className={id % 2 ? styles.wrapper__listblock0__del : styles.wrapper__listblock1__del} />
        </div>
    );
}

export default ListBlock;
