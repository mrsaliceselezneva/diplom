
import { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { YMaps } from '@pbe/react-yandex-maps';
import InputTextBlock from 'components/InputTextBlock/InputTextBlock';
import { setInstitutionEmail, setInstitutionName } from '../../redux/slices/requestSlice';

import styles from './ReuqestInstitution.module.scss';

import MapBlock from '../MapBlock/MapBlock';

function ReuqestInstitution() {
    const dispatch = useDispatch();

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    return (
        <>
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
                    <MapBlock />
                </YMaps>
            </div>
        </>
    );
}

export default ReuqestInstitution;
