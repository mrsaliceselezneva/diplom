import { FiCheckSquare, FiSquare } from "react-icons/fi";
import styles from './styles.module.scss';


const View = (props) => {
    const { was, click } = props;

    return (
        <div className={styles.wrapper} onClick={click}>
            {was ?
                <FiCheckSquare className={styles.wrapper__square} />
                :
                <FiSquare className={styles.wrapper__square} />
            }
        </div>

    )
}

export default View;
