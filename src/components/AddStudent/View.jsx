import InputBlock from 'components/InputBlock';
import SelectBlock from 'components/SelectBlock';

import { forwardRef } from 'react';

import styles from './styles.module.scss';

const View = forwardRef((props, ref) => {
    const { normalizeText, create, mas } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <form>
                    <InputBlock
                        title="фамилия"
                        type="text"
                        placeholder="Фамилия"
                        ref={ref.lastnameRef}
                        onChange={() => {
                            ref.lastnameRef.current.value = normalizeText(
                                ref.lastnameRef.current.value,
                            );
                        }}
                    />

                    <InputBlock
                        title="имя"
                        type="text"
                        placeholder="Имя"
                        ref={ref.nameRef}
                        onChange={() => {
                            ref.nameRef.current.value = normalizeText(ref.nameRef.current.value);
                        }}
                    />

                    <InputBlock
                        title="отчество"
                        type="text"
                        placeholder="Отчество"
                        ref={ref.patronymicRef}
                        onChange={() => {
                            ref.patronymicRef.current.value = normalizeText(
                                ref.patronymicRef.current.value,
                            );
                        }}
                    />

                    <InputBlock
                        title="email"
                        type="text"
                        placeholder="email"
                        ref={ref.emailRef}
                    />

                    <SelectBlock
                        title="группа"
                        placeholder="Группа"
                        ref={ref.groupRef}
                        mas={mas}
                    />

                    <label className={styles.wrapper__institution__label}>
                        <input
                            type="submit"
                            className={styles.wrapper__institution__label__submit}
                            value="Создать"
                            onClick={create}
                        />
                    </label>
                </form>
            </div>
        </div>
    );
})

export default View;
