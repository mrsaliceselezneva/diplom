import styles from './styles.module.scss';

const View = (props) => {
    const { showModal, onClose, onDel } = props;


    if (showModal) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__title}>Вы действительно хотите удалить?</div>
                    <div className={styles.modal__content__footer}>
                        <button
                            className={styles.modal__content__footer__clear}
                            onClick={onDel}>
                            Удалить
                        </button>
                        <button
                            className={styles.modal__content__footer__close}
                            onClick={onClose}>
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    return null;

}

export default View;
