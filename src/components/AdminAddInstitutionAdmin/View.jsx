import InputTextBlock from 'components/InputBlock';

import { forwardRef } from 'react';

import styles from './styles.module.scss';

const View = forwardRef((props, ref) => {
    const { normalizeText, normalizePhone } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <form>
                    <InputTextBlock
                        title="фамилия"
                        type="text"
                        placeholder="Фамилия"
                        ref={ref.lastnameRef}
                        onChange={() => {
                            ref.lastnameRef.current.value = normalizeText(
                                ref.lastnameRef.current.value,
                            );
                        }}
                    />

                    <InputTextBlock
                        title="имя"
                        type="text"
                        placeholder="Имя"
                        ref={ref.nameRef}
                        onChange={() => {
                            ref.nameRef.current.value = normalizeText(ref.nameRef.current.value);
                        }}
                    />

                    <InputTextBlock
                        title="отчество"
                        type="text"
                        placeholder="Отчество"
                        ref={ref.patronymicRef}
                        onChange={() => {
                            ref.patronymicRef.current.value = normalizeText(
                                ref.patronymicRef.current.value,
                            );
                        }}
                    />

                    <InputTextBlock
                        title="email"
                        type="text"
                        placeholder="email"
                        ref={ref.emailRef}
                    />

                    <InputTextBlock
                        title="телефон"
                        type="text"
                        placeholder="Телефон"
                        ref={ref.phoneRef}
                        onChange={() => {
                            ref.phoneRef.current.value = normalizePhone(ref.phoneRef.current.value);
                        }}
                    />

                    <InputTextBlock
                        title="пароль"
                        type="password"
                        placeholder="Пароль"
                        ref={ref.passwordRef}
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
