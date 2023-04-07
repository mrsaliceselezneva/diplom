import { FiCheckSquare, FiSquare, FiX } from 'react-icons/fi';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './ListBlock.module.scss';


function ListBlock({ id, keys, val }) {

    const [inst, setInst] = useState({});

    useEffect(() => {
        // eslint-disable-next-line no-restricted-syntax
        for (const [, key] of Object.entries(keys.slice(0, 4))) {
            if (key === 'institution_id') {
                axios
                    .get(`${process.env.REACT_APP_API_URL}/institution/${val[key]}`)
                    .then((responce) => {
                        setInst({ 'institution_id': responce.data.name, ...inst })
                    });
            }
        }
    }, []);

    function whichSquare(k, v) {
        if (v === true)
            return <FiCheckSquare />;
        if (v === false)
            return <FiSquare />;

        if (k === 'institution_id') {
            return inst[k];
        }
        return `${v}`;
    }


    return (
        <div className={styles.wrapper}>
            <div key={val.id} className={id % 2 ? styles.wrapper__listblock0 : styles.wrapper__listblock1}>
                {keys.slice(0, 4).map((key) =>
                    <div key={val.id + key + val[key]} className={id % 2 ? styles.wrapper__listblock0__block : styles.wrapper__listblock1__block}>
                        {whichSquare(key, val[key])}
                    </div>
                )}
            </div>
            <FiX className={id % 2 ? styles.wrapper__listblock0__del : styles.wrapper__listblock1__del} />
        </div>
    );
}

export default ListBlock;
