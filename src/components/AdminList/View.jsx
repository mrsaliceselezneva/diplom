import ListBlock from 'components/ListBlock';
import Pagination from 'components/Pagination/Pagination';
import styles from './styles.module.scss';


const View = (props) => {
    const { keys, dict, list } = props;

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
                <Pagination />
            </div>
        </div>
    );
}

export default View;
