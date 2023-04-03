import styles from './CreateInstitution_Institution.module.scss';

import { useState, useRef } from 'react';

import { useDispatch } from 'react-redux';
import { setInstitutionEmail, setInstitutionName } from '../../redux/slices/requestSlice';

import { YMaps } from '@pbe/react-yandex-maps';
import MapBlock from '../MapBlock/MapBlock';

function CreateInstitution_Institution() {
    const dispatch = useDispatch();

    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');
    const [incorrectAddress, setIncorrectAddress] = useState(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    function normalizeText(value) {
        if (!value) return '';
        const val = value.replace(/[^а-яёА-ЯЁ]/u, '');
        if (val.length > 0) return val[0].toUpperCase() + val.slice(1).toLowerCase();
        return '';
    }

    return (
        <>
            <label className={styles.label}>
                <div className={styles.label__top}>
                    <div className={styles.label__top__title}>название</div>
                </div>
                <input
                    type="text"
                    className={styles.label__input}
                    placeholder="Название"
                    ref={nameRef}
                    onChange={() => {
                        dispatch(setInstitutionName(nameRef.current.value));
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
                    onChange={() => {
                        dispatch(setInstitutionEmail(emailRef.current.value));
                    }}
                />
            </label>
            <div className={styles.label}>
                <div className={styles.label__top}>
                    <div className={styles.label__top__title}>адрес</div>
                </div>
                <YMaps
                    query={{
                        ns: 'use-load-option',
                        load: 'package.full',
                        apikey: `${process.env.REACT_APP_API_MAP}`,
                    }}>
                    <MapBlock
                        setIncorrectAddress={() => setIncorrectAddress(false)}
                        setStreet={setStreet}
                        setHouse={setHouse}
                    />
                </YMaps>
            </div>
        </>
    );
}

export default CreateInstitution_Institution;
