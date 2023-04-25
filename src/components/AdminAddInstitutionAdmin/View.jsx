import InputTextBlock from 'components/InputBlock';

import { forwardRef } from 'react';

import styles from './styles.module.scss';

const View = forwardRef((props, ref) => {
    const { changeLastname, changeName, changePatronymic, changePhone } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <form>
                    <InputTextBlock
                        title="фамилия"
                        type="text"
                        placeholder="Фамилия"
                        ref={ref.lastnameRef}
                        onChange={changeLastname}
                    />

                    <InputTextBlock
                        title="имя"
                        type="text"
                        placeholder="Имя"
                        ref={ref.nameRef}
                        onChange={changeName}
                    />

                    <InputTextBlock
                        title="отчество"
                        type="text"
                        placeholder="Отчество"
                        ref={ref.patronymicRef}
                        onChange={changePatronymic}
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
                        onChange={changePhone}
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
