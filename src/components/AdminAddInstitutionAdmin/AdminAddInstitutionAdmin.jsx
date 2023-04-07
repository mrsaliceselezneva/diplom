import { useRef } from 'react';
import InputTextBlock from 'components/InputTextBlock/InputTextBlock';
import styles from './AdminAddInstitutionAdmin.module.scss';

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
        if (val.length < 4) {
            return `+7 (${val}`;
        }
        if (val.length < 7) return `+7 (${val.slice(0, 3)}) ${val.slice(3)}`;
        return `+7 (${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6, 10)}`;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <form>
                    <InputTextBlock
                        title="фамилия"
                        type="text"
                        placeholder="Фамилия"
                        ref={lastnameRef}
                        onChange={() => {
                            lastnameRef.current.value = normalizeText(
                                lastnameRef.current.value,
                            );
                        }}
                    />

                    <InputTextBlock
                        title="имя"
                        type="text"
                        placeholder="Имя"
                        ref={nameRef}
                        onChange={() => {
                            nameRef.current.value = normalizeText(nameRef.current.value);
                        }}
                    />

                    <InputTextBlock
                        title="отчество"
                        type="text"
                        placeholder="Отчество"
                        ref={patronymicRef}
                        onChange={() => {
                            patronymicRef.current.value = normalizeText(
                                patronymicRef.current.value,
                            );
                        }}
                    />

                    <InputTextBlock
                        title="email"
                        type="text"
                        placeholder="email"
                        ref={emailRef}
                    />

                    <InputTextBlock
                        title="телефон"
                        type="text"
                        placeholder="Телефон"
                        ref={phoneRef}
                        onChange={() => {
                            phoneRef.current.value = normalizePhone();
                        }}
                    />

                    <InputTextBlock
                        title="пароль"
                        type="password"
                        placeholder="Пароль"
                        ref={passwordRef}
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

export default AdminAddInstitutionAdmin;
