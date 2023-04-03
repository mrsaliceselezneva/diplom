import styles from './ReuqestAdmin.module.scss';

import { useDispatch } from 'react-redux';
import React, { useRef } from 'react';
import {
    setAdminEmail,
    setAdminLastname,
    setAdminName,
    setAdminPassword,
    setAdminPatronymic,
    setAdminPhone,
} from '../../redux/slices/requestSlice';

function ReuqestAdmin() {
    const dispatch = useDispatch();

    const nameRef = useRef(null);
    const lastnameRef = useRef(null);
    const patronymicRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    function normalizeText(value) {
        if (!value) return '';
        const val = value.replace(/[^а-яёА-ЯЁ]/u, '');
        if (val.length > 0) return val[0].toUpperCase() + val.slice(1).toLowerCase();
        return '';
    }

    function normalizePhone() {
        if (!phoneRef.current.value) return '';
        let val;
        if (phoneRef.current.value.length === 1) val = phoneRef.current.value.replace(/[^\d]/g, '');
        else val = phoneRef.current.value.replace(/[^\d]/g, '').slice(1);
        if (val.length < 4) return '+7 (' + val;
        if (val.length < 7) return `+7 (${val.slice(0, 3)}) ${val.slice(3)}`;
        return `+7 (${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6, 10)}`;
    }

    return (
        <>
            <label className={styles.label}>
                <div className={styles.label__top}>
                    <div className={styles.label__top__title}>фамилия</div>
                </div>
                <input
                    type="text"
                    className={styles.label__input}
                    placeholder="Фамилия"
                    ref={lastnameRef}
                    onChange={() => {
                        lastnameRef.current.value = normalizeText(lastnameRef.current.value);
                        dispatch(setAdminLastname(lastnameRef.current.value));
                    }}
                />
            </label>

            <label className={styles.label}>
                <div className={styles.label__top}>
                    <div className={styles.label__top__title}>имя</div>
                </div>
                <input
                    type="text"
                    className={styles.label__input}
                    placeholder="Имя"
                    ref={nameRef}
                    onChange={() => {
                        nameRef.current.value = normalizeText(nameRef.current.value);
                        dispatch(setAdminName(nameRef.current.value));
                    }}
                />
            </label>

            <label className={styles.label}>
                <div className={styles.label__top}>
                    <div className={styles.label__top__title}>отчество</div>
                </div>
                <input
                    type="text"
                    className={styles.label__input}
                    placeholder="Отчество"
                    ref={patronymicRef}
                    onChange={() => {
                        patronymicRef.current.value = normalizeText(patronymicRef.current.value);
                        dispatch(setAdminPatronymic(patronymicRef.current.value));
                    }}
                />
            </label>

            <label className={styles.label}>
                <div className={styles.label__top}>
                    <div className={styles.label__top__title}>email</div>
                </div>
                <input
                    type="text"
                    className={styles.label__input}
                    placeholder="email"
                    ref={emailRef}
                    onChange={() => dispatch(setAdminEmail(emailRef.current.value))}
                />
            </label>

            <label className={styles.label}>
                <div className={styles.label__top}>
                    <div className={styles.label__top__title}>телефон</div>
                </div>
                <input
                    type="text"
                    className={styles.label__input}
                    placeholder="Телефон"
                    ref={phoneRef}
                    onChange={() => {
                        phoneRef.current.value = normalizePhone();
                        dispatch(setAdminPhone(phoneRef.current.value));
                    }}
                />
            </label>

            <label className={styles.label}>
                <div className={styles.label__top}>
                    <div className={styles.label__top__title}>пароль</div>
                </div>
                <input
                    type="password"
                    className={styles.label__input}
                    placeholder="Пароль"
                    ref={passwordRef}
                    onChange={() => {
                        dispatch(setAdminPassword(passwordRef.current.value));
                    }}
                />
            </label>
        </>
    );
}

export default ReuqestAdmin;
