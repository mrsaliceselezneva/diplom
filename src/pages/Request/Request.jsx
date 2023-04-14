import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import RequestAdmin from 'components/RequestAdmin/RequestAdmin';
import RequestInstitution from 'components/RequestInstitution/RequestInstitution';
import styles from './styles.module.scss';


import { setClear } from '../../redux/slices/requestSlice';

function Request() {
    const dispatch = useDispatch();
    const {
        adminName,
        adminLastname,
        adminPatronymic,
        adminEmail,
        adminPhone,
        adminPassword,
        institutionName,
        institutionEmail,
        institutionAddress,
    } = useSelector((state) => state.requestReducer);

    const [active, setActive] = useState(false);

    function send() {
        const data = {
            adminName,
            adminLastname,
            adminPatronymic,
            adminEmail,
            adminPhone,
            adminPassword,
            institutionName,
            institutionEmail,
            institutionAddress,
        };
        axios.post(`${process.env.REACT_APP_API_URL}/request`, data).then(() => {
            dispatch(setClear);
        });
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__title}>Заявка на создание организации</div>

            <form className={styles.wrapper__form}>
                <div className={styles.wrapper__form__top}>
                    <div
                        onClick={() => setActive(false)}
                        className={
                            !active
                                ? styles.wrapper__form__top__select_title
                                : styles.wrapper__form__top__title
                        }>
                        Данные организации
                    </div>
                    <div
                        onClick={() => setActive(true)}
                        className={
                            active
                                ? styles.wrapper__form__top__select_title
                                : styles.wrapper__form__top__title
                        }>
                        Данные администратора
                    </div>
                </div>
                <div className={styles.wrapper__form__main}>
                    {!active ? <RequestInstitution /> : null}
                    {active ? <RequestAdmin /> : null}
                </div>
                <label className={styles.wrapper__form__label}>
                    <input
                        type="submit"
                        className={styles.wrapper__form__label__submit}
                        value="Отправить"
                        onClick={() => send()}
                    />
                </label>
            </form>
        </div>
    );
}

export default Request;
