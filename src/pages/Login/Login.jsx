import styles from './Login.module.scss';

import axios from 'axios';
import React, { useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setRefreshToken } from '../../redux/slices/tokenSlice';
import { Link } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    function login() {
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        console.log(data);
        axios
            .post(`${process.env.REACT_APP_API_URL}/token/`, data)
            .then((response) => {
                console.log(response.data);
                dispatch(setRefreshToken(response.data.refresh));
            })
            .catch((error) => {
                console.log(error);
            });
    }

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
                                ref={emailRef}
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
                                ref={passwordRef}
                            />
                        </label>
                    </div>
                    <Link to="/week">
                        <label className={styles.wrapper__form__main__label}>
                            <input
                                type="submit"
                                className={styles.wrapper__form__main__label__submit}
                                value="Войти"
                                onClick={() => login()}
                            />
                        </label>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
