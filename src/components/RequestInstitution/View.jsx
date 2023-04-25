
import { forwardRef } from 'react';
import { YMaps } from '@pbe/react-yandex-maps';
import InputTextBlock from 'components/InputBlock';

import styles from './styles.module.scss';

import MapBlock from '../MapBlock';

const View = forwardRef((props, ref) => {
    const {
        changeName,
        changeEmail
    } = props;

    return (
        <>
            <InputTextBlock
                title="название"
                type="text"
                placeholder="Название"
                ref={ref.nameRef}
                onChange={changeName}
            />

            <InputTextBlock
                title="email"
                type="text"
                placeholder="email"
                ref={ref.emailRef}
                onChange={changeEmail}
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
})

export default View;
