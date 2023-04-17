import { Link } from 'react-router-dom';

import { forwardRef } from 'react';

import styles from './styles.module.scss';

const LoginView = forwardRef((props, ref) => {
    const { login } = props;

    return (
        <div className={styles.login}>
            <div className={styles.wrapper}>
                <div className={styles.wrapper__title}>Авторизация</div>

                <form className={styles.wrapper__form}>
                    <div className={styles.wrapper__form__main}>
                        <label className={styles.wrapper__form__main__label}>
                            <div className={styles.wrapper__form__main__label__top}>
                                <div className={styles.wrapper__form__main__label__top__title}>
                                    email
                                </div>
                            </div>
                            <input
                                type="text"
                                className={styles.wrapper__form__main__label__input}
                                placeholder="email"
                                ref={ref.emailRef}
                            />
                        </label>

                        <label className={styles.wrapper__form__main__label}>
                            <div className={styles.wrapper__form__main__label__top}>
                                <div className={styles.wrapper__form__main__label__top__title}>
                                    пароль
                                </div>
                            </div>
                            <input
                                type="password"
                                className={styles.wrapper__form__main__label__input}
                                placeholder="Пароль"
                                ref={ref.passwordRef}
                            />
                        </label>
                    </div>
                    <Link to="/">
                        <label className={styles.wrapper__form__main__label}>
                            <input
                                type="submit"
                                className={styles.wrapper__form__main__label__submit}
                                value="Войти"
                                onClick={login}
                            />
                        </label>
                    </Link>
                </form>
            </div>
        </div>
    );
})

export default LoginView;
