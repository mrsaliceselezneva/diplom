import MissLessonBlock from 'components/MissLessonBlock';
import styles from './styles.module.scss';

const View = (props) => {
    const { showKeys, keys, dict, list } = props;
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <div className={styles.wrapper__institution__title}>
                    {showKeys.map((key) =>
                        <div key={key} className={styles.wrapper__institution__title__block}>
                            {dict[key]}
                        </div>
                    )}
                </div>
                <div className={styles.wrapper__institution__list}>
                    {list.map((val, id) =>
                        <MissLessonBlock id={id} key={val.id + id} showKeys={showKeys} keys={keys} val={val} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default View;
