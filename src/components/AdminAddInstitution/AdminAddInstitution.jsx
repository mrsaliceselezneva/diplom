import styles from './AdminAddInstitution.module.scss';

import { useState, useRef } from 'react';

import { useDispatch } from 'react-redux';
import { setInstitutionEmail, setInstitutionName } from '../../redux/slices/requestSlice';

function AdminAddInstitution() {
    const dispatch = useDispatch();

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <form>
                    <label className={styles.wrapper__institution__label}>
                        <div className={styles.wrapper__institution__label__top}>
                            <div className={styles.wrapper__institution__label__top__title}>
                                название
                            </div>
                        </div>
                        <input
                            type="text"
                            className={styles.wrapper__institution__label__input}
                            placeholder="Название"
                            ref={nameRef}
                            onChange={() => {
                                dispatch(setInstitutionName(nameRef.current.value));
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
                            onChange={() => {
                                dispatch(setInstitutionEmail(emailRef.current.value));
                            }}
                        />
                    </label>
                    <label className={styles.wrapper__institution__label}>
                        <div className={styles.wrapper__institution__label__top}>
                            <div className={styles.wrapper__institution__label__top__title}>
                                адрес
                            </div>
                        </div>
                        <input
                            type="text"
                            className={styles.wrapper__institution__label__input}
                            placeholder="адрес"
                            ref={addressRef}
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

export default AdminAddInstitution;
