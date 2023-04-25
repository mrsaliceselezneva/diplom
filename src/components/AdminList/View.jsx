import ListBlock from 'components/ListBlock';
import styles from './styles.module.scss';

function View({ keys, dict, list }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <div className={styles.wrapper__institution__title}>
                    {keys.slice(0, 4).map((key) =>
                        <div key={key} className={styles.wrapper__institution__title__block}>
                            {dict[key]}
                        </div>
                    )}
                </div>
                <div className={styles.wrapper__institution__list}>
                    {list.map((val, id) =>
                        <ListBlock id={id} key={val.id + id} keys={keys} val={val} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default View;
