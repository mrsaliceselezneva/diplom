import MissLessonModal from 'components/MissLessonModal';
import styles from './styles.module.scss';


const View = (props) => {
    const { id, showKeys, keys, val, showModal, onOpen, onClose, onUpdate } = props;
    const classNameListblock = id % 2 ? styles.wrapper__listblock0 : styles.wrapper__listblock1;
    const classNameBlock = id % 2 ? styles.wrapper__listblock0__block : styles.wrapper__listblock1__block;

    return (
        <div className={styles.wrapper}>
            <MissLessonModal
                id={val.id}
                showModal={showModal}
                onClose={onClose}
                onUpdate={onUpdate}
                keys={keys}
                val={val}
            />
            <div key={val.id} className={classNameListblock} onClick={onOpen}>
                {showKeys.map((key) =>
                    <div key={val.id + key + val[key]} className={classNameBlock}>
                        {val[key]}
                    </div>
                )}
            </div>
        </div>
    );
}

export default View;
