import styles from './CreateInstitution.module.scss';

import CreateInstitution_Admin from '../../components/CreateInstitution_Admin/CreateInstitution_Admin';
import CreateInstitution_Institution from '../../components/CreateInstitution_Institution/CreateInstitution_Institution';

import { useState } from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { setClear } from '../../redux/slices/requestSlice';

function CreateInstitution() {
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
            adminName: adminName,
            adminLastname: adminLastname,
            adminPatronymic: adminPatronymic,
            adminEmail: adminEmail,
            adminPhone: adminPhone,
            adminPassword: adminPassword,
            institutionName: institutionName,
            institutionEmail: institutionEmail,
            institutionAddress: institutionAddress,
        };
        console.log(data);
        axios.post(`${process.env.REACT_APP_API_URL}/request`, data).then((response) => {
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
                    {!active ? <CreateInstitution_Institution /> : null}
                    {active ? <CreateInstitution_Admin /> : null}
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

export default CreateInstitution;
