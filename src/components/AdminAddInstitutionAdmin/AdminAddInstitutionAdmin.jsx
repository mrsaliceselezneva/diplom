import styles from './AdminAddInstitutionAdmin.module.scss';

import { useState, useRef } from 'react';

function AdminAddInstitutionAdmin() {
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
    const v = 1;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <form>
                    <label className={styles.wrapper__institution__label}>
                        <div className={styles.wrapper__institution__label__top}>
                            <div className={styles.wrapper__institution__label__top__title}>
                                фамилия
                            </div>
                        </div>
                        <input
                            type="text"
                            className={styles.wrapper__institution__label__input}
                            placeholder="Фамилия"
                            ref={lastnameRef}
                            onChange={() => {
                                lastnameRef.current.value = normalizeText(
                                    lastnameRef.current.value,
                                );
                                dispatch(setAdminLastname(lastnameRef.current.value));
                            }}
                        />
                    </label>

                    <label className={styles.wrapper__institution__label}>
                        <div className={styles.wrapper__institution__label__top}>
                            <div className={styles.wrapper__institution__label__top__title}>
                                имя
                            </div>
                        </div>
                        <input
                            type="text"
                            className={styles.wrapper__institution__label__input}
                            placeholder="Имя"
                            ref={nameRef}
                            onChange={() => {
                                nameRef.current.value = normalizeText(nameRef.current.value);
                                dispatch(setAdminName(nameRef.current.value));
                            }}
                        />
                    </label>

                    <label className={styles.wrapper__institution__label}>
                        <div className={styles.wrapper__institution__label__top}>
                            <div className={styles.wrapper__institution__label__top__title}>
                                отчество
                            </div>
                        </div>
                        <input
                            type="text"
                            className={styles.wrapper__institution__label__input}
                            placeholder="Отчество"
                            ref={patronymicRef}
                            onChange={() => {
                                patronymicRef.current.value = normalizeText(
                                    patronymicRef.current.value,
                                );
                            }}
                        />
                    </label>

                    <label className={styles.wrapper__institution__label}>
                        <div className={styles.wrapper__institution__label__top}>
                            <div className={styles.wrapper__institution__label__top__title}>
                                email
                            </div>
                        </div>
                        <input
                            type="text"
                            className={styles.wrapper__institution__label__input}
                            placeholder="email"
                            ref={emailRef}
                            onChange={() => {}}
                        />
                    </label>

                    <label className={styles.wrapper__institution__label}>
                        <div className={styles.wrapper__institution__label__top}>
                            <div className={styles.wrapper__institution__label__top__title}>
                                телефон
                            </div>
                        </div>
                        <input
                            type="text"
                            className={styles.wrapper__institution__label__input}
                            placeholder="Телефон"
                            ref={phoneRef}
                            onChange={() => {
                                phoneRef.current.value = normalizePhone();
                            }}
                        />
                    </label>

                    <label className={styles.wrapper__institution__label}>
                        <div className={styles.wrapper__institution__label__top}>
                            <div className={styles.wrapper__institution__label__top__title}>
                                пароль
                            </div>
                        </div>
                        <input
                            type="password"
                            className={styles.wrapper__institution__label__input}
                            placeholder="Пароль"
                            ref={passwordRef}
                            onChange={() => {}}
                        />
                    </label>
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
}

export default AdminAddInstitutionAdmin;
