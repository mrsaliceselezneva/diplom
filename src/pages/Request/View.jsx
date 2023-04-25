import RequestAdmin from 'components/RequestAdmin';
import RequestInstitution from 'components/RequestInstitution';
import styles from './styles.module.scss';


const View = (props) => {
    const { active, setActive, sendRequest } = props;

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
                        onClick={sendRequest}
                    />
                </label>
            </form>
        </div>
    );
}

export default View;
