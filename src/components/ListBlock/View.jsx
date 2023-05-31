import ListBlockModal from 'components/ListBlockModal';
import ListBlockModalDel from 'components/ListBlockModalDel';
import { FiX } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';


const View = (props) => {
    const { id, showKeys, keys, val, inst, showModal, onOpen, onClose, showModalDel, onOpenDel, onCloseDel, getCurrentSquare } = props;
    const classNameListblock = id % 2 ? styles.wrapper__listblock0 : styles.wrapper__listblock1;
    const classNameListblockDel = id % 2 ? styles.wrapper__listblock0__del : styles.wrapper__listblock1__del;
    const classNameBlock = id % 2 ? styles.wrapper__listblock0__block : styles.wrapper__listblock1__block;

    const { selectFilter } = useSelector((state) => state.sidebarReducer);

    return (
        <div className={styles.wrapper}>
            {selectFilter === 'ученики' &&
                <ListBlockModal
                    id={val.id}
                    showModal={showModal}
                    onClose={onClose}
                    keys={keys}
                    val={val}
                />}
            <ListBlockModalDel
                id={val.id}
                showModal={showModalDel}
                onClose={onCloseDel}
            />
            <div key={val.id} className={classNameListblock} onClick={onOpen}>
                {showKeys.map((key) =>
                    <div key={val.id + key + val[key]} className={classNameBlock}>
                        {getCurrentSquare(inst, key, val[key])}
                    </div>
                )}
            </div>
            <FiX className={classNameListblockDel} onClick={onOpenDel} />
        </div>
    );
}

export default View;
