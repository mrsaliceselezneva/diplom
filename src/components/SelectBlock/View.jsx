import { forwardRef } from 'react';
import styles from './styles.module.scss';

const View = forwardRef((props, ref) => {
    const { title, onChange, mas } = props;
    return (
        <label className={styles.label}>
            <div className={styles.label__top}>
                <div className={styles.label__top__title}>
                    {title}
                </div>
            </div>
            <select className={styles.label__input}
                ref={ref}
                onChange={onChange}
            >
                {/* <option>Выберите из списка</option> */}
                {mas.map((val) => <option key={val}>{val}</option>)}
            </select>
        </label>);
})

export default View;
