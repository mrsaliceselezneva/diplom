import { forwardRef } from 'react';
import styles from './InputTextBlock.module.scss';

const InputTextBlock = forwardRef((props, ref) => {
    const { title, type, placeholder, onChange } = props;
    return (
        <label className={styles.label}>
            <div className={styles.label__top}>
                <div className={styles.label__top__title}>
                    {title}
                </div>
            </div>
            <input
                className={styles.label__input}
                type={type}
                placeholder={placeholder}
                ref={ref}
                onChange={onChange}
            />
        </label>);
})

export default InputTextBlock;
