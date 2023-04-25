import InputBlock from 'components/InputBlock';

import { forwardRef } from 'react';

import styles from './styles.module.scss';

const View = forwardRef((props, ref) => {
    const { createGroup } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <form>
                    <InputBlock
                        title="название"
                        type="text"
                        placeholder="Название"
                        ref={ref}
                    />

                    <label className={styles.wrapper__institution__label}>
                        <input
                            type="submit"
                            className={styles.wrapper__institution__label__submit}
                            value="Создать"
                            onClick={createGroup}
                        />
                    </label>
                </form>
            </div>
        </div>
    );
})

export default View;
