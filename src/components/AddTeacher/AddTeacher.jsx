import { useRef } from 'react';

import { useDispatch } from 'react-redux';

import InputTextBlock from 'components/InputTextBlock/InputTextBlock';
import styles from './AddTeacher.module.scss';
import { setInstitutionEmail, setInstitutionName } from '../../redux/slices/requestSlice';

function Add() {
    const dispatch = useDispatch();

    const emailRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const institutionIdRef = useRef(null);
    const patronymicRef = useRef(null);
    const adminRef = useRef(null);
    const teacherRef = useRef(null);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <form>
                    <InputTextBlock
                        title="фамилия"
                        type="text"
                        placeholder="Фамилия"
                        ref={lastNameRef}
                    />

                    <InputTextBlock
                        title="имя"
                        type="text"
                        placeholder="Имя"
                        ref={firstNameRef}
                    />

                    <InputTextBlock
                        title="отчество"
                        type="text"
                        placeholder="Отчество"
                        ref={patronymicRef}
                    />

                    <InputTextBlock
                        title="email"
                        type="text"
                        placeholder="email"
                        ref={emailRef}
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
}

export default Add;
