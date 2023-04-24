import InputBlock from 'components/InputBlock';
import { forwardRef } from 'react';
import styles from './styles.module.scss';

const View = forwardRef((props, ref) => {
    const { createCall } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <form>
                    <InputBlock
                        title="начало"
                        type="time"
                        ref={ref.timeRef}
                    />

                    <InputBlock
                        title="конец через"
                        type="time"
                        ref={ref.pauseRef}
                    />


                    <label className={styles.wrapper__institution__label}>
                        <div
                            type="submit"
                            className={styles.wrapper__institution__label__submit}
                            value="Создать"
                            onClick={createCall}
                        />
                    </label>
                </form>
            </div>
        </div>
    );
})

export default View;
