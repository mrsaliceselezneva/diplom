import InputBlock from 'components/InputBlock';
import CheckboxBlock from 'components/CheckboxBlock';

import { forwardRef } from 'react';

import styles from './styles.module.scss';

const View = forwardRef((props, ref) => {
    const { createClassroom } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <form>
                    <InputBlock
                        title="название"
                        type="text"
                        placeholder="Название"
                        ref={ref.nameRef}
                    />

                    <InputBlock
                        title="тип"
                        type="text"
                        placeholder="Тип"
                        ref={ref.typeRef}
                    />

                    <CheckboxBlock
                        title="дистант"
                        type="checkbox"
                        ref={ref.multitaskingRef}
                    />


                    <label className={styles.wrapper__institution__label}>
                        <input
                            type="submit"
                            className={styles.wrapper__institution__label__submit}
                            value="Создать"
                            onClick={createClassroom}
                        />
                    </label>
                </form>
            </div>
        </div>
    );
})

export default View;
