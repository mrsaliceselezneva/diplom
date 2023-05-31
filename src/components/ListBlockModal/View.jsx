import { FiPlus, FiMinus } from 'react-icons/fi';
import styles from './styles.module.scss';

const View = (props) => {
    const { keys, val, showModal, onClose, onUpdate, dict, left, upLeft, downLeft } = props;


    if (showModal) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__title}>Изменение количества занятий</div>
                    <div className={styles.modal__content__body}>
                        {keys.map((key) =>
                            key !== 'id' &&
                            key !== 'institution_id' &&
                            <div key={val[key] + key + val.id}
                                className={styles.modal__content__body__block}
                            >
                                {key === 'left' ?
                                    <>
                                        <div className={styles.modal__content__body__block__key}>{dict[key]}</div>
                                        <div className={styles.modal__content__body__block__val}>
                                            <FiMinus className={styles.modal__content__body__block__val__minus}
                                                // eslint-disable-next-line no-return-assign
                                                onClick={downLeft} />
                                            {left}
                                            <FiPlus className={styles.modal__content__body__block__val__plus}
                                                // eslint-disable-next-line no-return-assign
                                                onClick={upLeft} />
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className={styles.modal__content__body__block__key}>{dict[key]}</div>
                                        <div className={styles.modal__content__body__block__val}>{val[key]}</div>
                                    </>
                                }

                            </div>
                        )}
                    </div>
                    <div className={styles.modal__content__footer}>
                        <button
                            className={styles.modal__content__footer__clear}
                            onClick={onUpdate}>
                            Изменить
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
