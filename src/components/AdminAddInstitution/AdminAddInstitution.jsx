import { useRef } from 'react';

import { useDispatch } from 'react-redux';

import InputTextBlock from 'components/InputBlock';
import styles from './AdminAddInstitution.module.scss';
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
                    <InputTextBlock
                        title="название"
                        type="password"
                        placeholder="Название"
                        ref={nameRef}
                        onChange={() => {
                            dispatch(setInstitutionName(nameRef.current.value));
                        }}
                    />

                    <InputTextBlock
                        title="email"
                        type="text"
                        placeholder="email"
                        ref={emailRef}
                        onChange={() => {
                            dispatch(setInstitutionEmail(emailRef.current.value));
                        }}
                    />

                    <InputTextBlock
                        title="адрес"
                        type="text"
                        placeholder="Адрес"
                        ref={addressRef}
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

export default AdminAddInstitution;
