import SelectBlock from 'components/SelectBlock';

import { forwardRef } from 'react';

import styles from './styles.module.scss';

const View = forwardRef((props, ref) => {
    const { createLesson, teacherList, callList, classroomList, groupList, weekdayList } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <form>

                    <SelectBlock
                        title="учитель"
                        mas={teacherList}
                        ref={ref.teacherRef}
                    />

                    <SelectBlock
                        title="время"
                        mas={callList}
                        ref={ref.callRef}
                    />

                    <SelectBlock
                        title="кабинет"
                        mas={classroomList}
                        ref={ref.classroomRef}
                    />

                    <SelectBlock
                        title="группа"
                        mas={groupList}
                        ref={ref.groupRef}
                    />

                    <SelectBlock
                        title="день"
                        mas={weekdayList}
                        ref={ref.weekdayRef}
                    />

                    <label className={styles.wrapper__institution__label}>
                        <input
                            type="submit"
                            className={styles.wrapper__institution__label__submit}
                            value="Создать"
                            onClick={createLesson}
                        />
                    </label>
                </form>
            </div>
        </div>
    );
})

export default View;
