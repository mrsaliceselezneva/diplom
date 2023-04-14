function RequestView({ active, setActive, requestComp, styles, send }) {

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
                    {requestComp}
                </div>
                <label className={styles.wrapper__form__label}>
                    <input
                        type="submit"
                        className={styles.wrapper__form__label__submit}
                        value="Отправить"
                        onClick={send}
                    />
                </label>
            </form>
        </div>
    );
}

export default RequestView;
