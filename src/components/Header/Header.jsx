import styles from './Header.module.scss';

import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiLogOut, FiUser } from 'react-icons/fi';
import { BsBuildingFillAdd, BsBuildingFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';

import { setLogout } from '../../redux/slices/tokenSlice';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size[0];
}

function Header() {
    const width = useWindowSize();
    const dispatch = useDispatch();
    const { refreshToken } = useSelector((state) => state.tokenReducer);

    const institutionInfo = [
        'Код Успеха',
        'ул. Федерации, 148',
        'poluvesov.artyom@gmail.com',
        '89278070727',
    ];
    const personalInfo = [
        'Полувесов',
        'Артём',
        'Алексеевич',
        'poluvesov.artyom@gmail.com',
        '89278070727',
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__header}>
                <Link className={styles.wrapper__header__logo} to="/">
                    <div className={styles.wrapper__header__logo__img_background}>
                        <img
                            className={styles.wrapper__header__logo__img_background__img}
                            src="img/logo.png"
                            alt="logo"
                        />
                    </div>
                    Was or Not?
                </Link>
                <div className={styles.wrapper__header__right}>
                    {refreshToken ? (
                        <>
                            <BsBuildingFill className={styles.wrapper__header__right__add} />
                            <div className={styles.wrapper__header__right__institution}>
                                {institutionInfo.map((info) => (
                                    <div key={info}>{info}</div>
                                ))}
                            </div>
                            <FiUser className={styles.wrapper__header__right__user} />
                            <div className={styles.wrapper__header__right__personal}>
                                {personalInfo.map((info) => (
                                    <div key={info}>{info}</div>
                                ))}
                            </div>
                            <FiLogOut
                                className={styles.wrapper__header__right__login}
                                onClick={() => dispatch(setLogout())}
                            />
                        </>
                    ) : (
                        <>
                            <Link to="create-institution">
                                <BsBuildingFillAdd className={styles.wrapper__header__right__add} />
                            </Link>
                            <Link to="login">
                                <FiLogIn className={styles.wrapper__header__right__login} />
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
