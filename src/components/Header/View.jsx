import { Link } from 'react-router-dom';
import { FiLogIn, FiLogOut, FiUser } from 'react-icons/fi';
import { BsBuildingFillAdd, BsBuildingFill } from 'react-icons/bs';

import styles from './styles.module.scss';


function View({ dispatch, setLogout, refreshToken, institutionInfo, personalInfo }) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__header}>
                <Link className={styles.wrapper__header__logo} to="/">
                    <div className={styles.wrapper__header__logo__img_background}>
                        <img
                            className={styles.wrapper__header__logo__img_background__img}
                            src={`${process.env.REACT_APP_URL}/img/logo.png`}
                            alt="logo"
                        />
                    </div>
                    Was or Not?
                </Link>
                <div className={styles.wrapper__header__menu}>
                    {refreshToken ? (
                        <>
                            <BsBuildingFill className={styles.wrapper__header__menu__add} />
                            <div className={styles.wrapper__header__menu__left}>
                                {institutionInfo.map((info) => (
                                    <div key={info}>{info}</div>
                                ))}
                            </div>
                            <FiUser className={styles.wrapper__header__menu__user} />
                            <div className={styles.wrapper__header__menu__central}>
                                {personalInfo.map((info) => (
                                    <div key={info}>{info}</div>
                                ))}
                            </div>
                            <FiLogOut
                                className={styles.wrapper__header__menu__login}
                                onClick={() => dispatch(setLogout())}
                            />
                            <div className={styles.wrapper__header__menu__right}>Выйти</div>
                        </>
                    ) : (
                        <>
                            <Link to="reuqest">
                                <BsBuildingFillAdd className={styles.wrapper__header__menu__add} />
                                <div className={styles.wrapper__header__menu__left}>
                                    Зарегистрировать организацию
                                </div>
                            </Link>
                            <Link to="login">
                                <FiLogIn className={styles.wrapper__header__menu__login} />
                                <div className={styles.wrapper__header__menu__right}>Войти</div>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default View;
