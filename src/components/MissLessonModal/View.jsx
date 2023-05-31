import MissLessonModalStudent from 'components/MissLessonModalStudent';
import styles from './styles.module.scss';

const View = (props) => {
    const { val, showModal, onClose, onUpdate } = props;

    if (showModal) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__title}>Провести занятие</div>
                    <div className={styles.modal__content__body}>

                        <MissLessonModalStudent
                            key={val.call_id + val.teacher_id}
                            date={val.date}
                            time={val.call_id}
                            teacher={val.teacher_id}
                            list={Array(...val.group)}
                        />
                    </div>
                    <div className={styles.modal__content__footer}>
                        <button
                            className={styles.modal__content__footer__clear}
                            onClick={onUpdate}>
                            Провести
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
