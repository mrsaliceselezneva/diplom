import InputTextBlock from 'components/InputBlock';
import { forwardRef } from 'react';
import styles from './styles.module.scss';

const View = forwardRef((props, ref) => {
    const { changeName, changeEmail } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <form>
                    <InputTextBlock
                        title="название"
                        type="text"
                        placeholder="Название"
                        ref={ref.nameRef}
                        onChange={changeName}
                    />

                    <InputTextBlock
                        title="email"
                        type="text"
                        placeholder="email"
                        ref={ref.emailRef}
                        onChange={changeEmail}
                    />

                    <InputTextBlock
                        title="адрес"
                        type="text"
                        placeholder="Адрес"
                        ref={ref.addressRef}
                    />

                    <label className={styles.wrapper__institution__label}>
                        <input
                            type="submit"
                            className={styles.wrapper__institution__label__submit}
                            value="Создать"
                        />
                    </label>
                </form>
            </div>
        </div>
    );
})

export default View;
