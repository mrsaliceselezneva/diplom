import { useState, forwardRef } from 'react';
import { FaCheck } from 'react-icons/fa';
import styles from './styles.module.scss';



const View = forwardRef((props, ref) => {
    const { title, type, placeholder, onChange } = props;
    const [on, setOn] = useState(false);
    return (
        <div className={styles.wrapper}>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <label className={styles.wrapper__label} htmlFor={title} onClick={() => setOn(!on)}>
                <div className={styles.wrapper__label__title}>
                    {title}
                </div>

                <div className={styles.wrapper__label__fake}>
                    {on && <FaCheck className={styles.wrapper__label__fake__checkbox} />}
                </div>
            </label>

            <input
                className={styles.wrapper__checkbox}
                id={title}
                name={title}
                type={type}
                placeholder={placeholder}
                ref={ref}
                onChange={onChange}
            />
        </div>
    );
})

export default View;
